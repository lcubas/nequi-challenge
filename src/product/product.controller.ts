import { Controller, Delete, Param, Body, Put } from '@nestjs/common';
import { ProductService } from './ product.service';
import { UpdateStockDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Delete(':productId')
  delete(@Param('productId') productId: number) {
    return this.productService.delete(productId);
  }

  @Put(':productId/stock')
  updateStock(
    @Param('productId') productId: number,
    @Body() dto: UpdateStockDto,
  ) {
    return this.productService.updateStock(productId, dto);
  }
}
