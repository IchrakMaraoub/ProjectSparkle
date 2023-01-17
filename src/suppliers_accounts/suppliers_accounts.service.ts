import { HttpException, Injectable, NotFoundException } from '@nestjs/common';

import { Supplier } from './Entity/SupplierEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addSupplierDto } from './DTO/AddSupplierDto';
import { UpdateSupplierDto } from './DTO/UpdateSupplierDto';

@Injectable()
export class SuppliersAccountsService {
    constructor(
        @InjectRepository(Supplier)
        private SuppliersRepository: Repository<Supplier>,
      ){}
      async getSupplier(): Promise<Supplier[]> {
        return await this.SuppliersRepository.find();
      }
    async addSupplier(Supplier:addSupplierDto) : Promise<Supplier>{
      return this.SuppliersRepository.save(Supplier);  
    }
    
    async updateSupplier(id:number,Supplier:UpdateSupplierDto): Promise<Supplier>{
      const  newSupplier = await this.SuppliersRepository.preload({
        id,
        ...Supplier
      });
      return await this.SuppliersRepository.save(newSupplier);
    if(!newSupplier)
    {
      throw new NotFoundException('le Supplier n existe pas ');
    }}
     async removeSupplier(id : number) {
      
      return await this.SuppliersRepository.delete(id);
     }
    
  }

