import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { FranchiseProductController } from './franchise-product.controller';
import { BranchProductController } from './branch-product.controller';
import { ProductService } from './ product.service';

@Module({
  controllers: [
    ProductController,
    FranchiseProductController,
    BranchProductController,
  ],
  providers: [ProductService],
})
export class ProductModule {}
