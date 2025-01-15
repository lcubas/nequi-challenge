import { Controller, Param, Get } from '@nestjs/common';
import { ProductService } from './ product.service';

@Controller('franchises/:franchiseId/products')
export class FranchiseProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/top')
  findTopProducts(@Param('franchiseId') franchiseId: number) {
    return this.productService.findTopProductsByFranchise(franchiseId);
  }
}
