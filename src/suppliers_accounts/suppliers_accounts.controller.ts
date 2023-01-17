import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SuppliersAccountsService } from './suppliers_accounts.service';
import { Supplier } from './Entity/SupplierEntity';
import { UpdateSupplierDto } from './DTO/UpdateSupplierDto';
import { addSupplierDto } from './DTO/AddSupplierDto';


@Controller('suppliers-accounts')
export class SuppliersAccountsController {
    constructor(private SupplierService: SuppliersAccountsService) {}

 
  @Get()
 async getAllSupplier() : Promise<Supplier[]>{
    return  await this.SupplierService.getSupplier();
  }
  @Post ()
  async addSupplier(
@Body() addSupplierDto:addSupplierDto):Promise<Supplier>{
  
return await this.SupplierService.addSupplier(addSupplierDto)}
@Patch ()
async updateSupplier(
@Body() UpdateSupplierDto:UpdateSupplierDto,
@Param('id') id:number):Promise<Supplier>{
return await this.SupplierService.updateSupplier(id,UpdateSupplierDto);
}
@Delete(':id')
async removeSupplier(
  @Param('id' , ParseIntPipe) id:number
){
  return await this.SupplierService.removeSupplier(id);
}

}