import { Controller, Post, Param, Body } from '@nestjs/common';
import { ProductService } from './ product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('branches/:branchId/products')
export class BranchProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Param('branchId') branchId: number, @Body() dto: CreateProductDto) {
    return this.productService.create(branchId, dto);
  }
}
