import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './entity/branch.entity';
import { Franchise } from 'src/franchise/entity/franchise.entity';
import { CreateBranchDto } from './dto/create-branch.dto';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch)
    private branchRepository: Repository<Branch>,
    @InjectRepository(Franchise)
    private franchiseRepository: Repository<Franchise>,
  ) {}

  async create(franchiseId: number, dto: CreateBranchDto): Promise<Branch> {
    const franchise = await this.franchiseRepository.findOne({
      where: { id: franchiseId },
    });

    if (!franchise) throw new NotFoundException('Franchise not found');

    const branch = this.branchRepository.create({ ...dto, franchise });
    return this.branchRepository.save(branch);
  }

  async findByFranchise(franchiseId: number): Promise<Branch[]> {
    return this.branchRepository.find({
      where: { franchise: { id: franchiseId } },
      relations: ['franchise'],
    });
  }
}
