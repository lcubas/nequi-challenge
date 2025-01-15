import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { Branch } from 'src/branch/entity/branch.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateStockDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Branch)
    private branchRepository: Repository<Branch>,
  ) {}

  async create(branchId: number, dto: CreateProductDto): Promise<Product> {
    const branch = await this.branchRepository.findOne({
      where: { id: branchId },
    });

    if (!branch) throw new NotFoundException('Branch not found');

    const product = this.productRepository.create({ ...dto, branch });
    return this.productRepository.save(product);
  }

  async delete(productId: number): Promise<void> {
    const result = await this.productRepository.delete(productId);

    if (result.affected === 0) throw new NotFoundException('Product not found');
  }

  async updateStock(productId: number, dto: UpdateStockDto): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (!product) throw new NotFoundException('Product not found');

    product.stock = dto.stock;
    return this.productRepository.save(product);
  }

  async findTopProductsByFranchise(franchiseId: number) {
    const products = await this.productRepository
      .createQueryBuilder('product')
      .innerJoinAndSelect('product.branch', 'branch')
      .innerJoinAndSelect('branch.franchise', 'franchise')
      .where('franchise.id = :franchiseId', { franchiseId })
      .select([
        'branch.name AS branchName',
        'product.name AS productName',
        'product.stock AS stock',
      ])
      .groupBy('branch.id')
      .orderBy('product.stock', 'DESC')
      .getRawMany();

    return products;
  }
}
