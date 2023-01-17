import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './Entity/ProductsEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addProductDto } from './DTO/AddProductsDto';
import { UpdateProdctDto } from './DTO/UpdateProductsDto';


@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private ProductRepository: Repository<Product>,
      ){}

      async addProduct(Product:addProductDto) : Promise<Product>{
        return this.ProductRepository.save(Product);  
      }

      async getProduct(): Promise<Product[]> {
        return await this.ProductRepository.find();
      }

    async updateProduct(id:number,Product:UpdateProdctDto): Promise<Product>{
        const  newProduct = await this.ProductRepository.preload({
          id,
          ...Product
        });
        return await this.ProductRepository.save(newProduct);
      if(!newProduct)
      {
        throw new NotFoundException('le produit n existe pas ');
      }}
    async removeProduct(id:number){
        await this.ProductRepository.delete(id);
    }
}
