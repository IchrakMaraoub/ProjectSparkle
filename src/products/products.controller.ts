import { Controller, Post, Get, Body, Param, Delete, Patch, ParseIntPipe } from '@nestjs/common';
import { Product } from './Entity/ProductsEntity';
import { ProductsService } from './products.service';
import { addProductDto } from './DTO/AddProductsDto';
import { UpdateProdctDto } from './DTO/UpdateProductsDto';



@Controller('products')
export class ProductsController {
  
  constructor( private ProductService:ProductsService) {}

  @Get()
 async getAllProduct() : Promise<Product[]>{
    return  await this.ProductService.getProduct();
  }
 
  @Post ()
  async addProduct(
@Body() addProductDto:addProductDto):Promise<Product>{
  
return await this.ProductService.addProduct(addProductDto)}
@Patch ()
async updateProduct(
@Body() UpdateProductDto:UpdateProdctDto,
@Param('id') id:number):Promise<Product>{
return await this.ProductService.updateProduct(id,UpdateProductDto);
}
@Delete(':id')
async removeProduct(
  @Param('id' , ParseIntPipe) id:number
){
  return await this.ProductService.removeProduct(id);
}

}
