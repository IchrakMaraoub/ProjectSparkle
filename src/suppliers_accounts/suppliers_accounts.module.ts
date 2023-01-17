import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppliersAccountsService } from './suppliers_accounts.service';
import { SuppliersAccountsController } from './suppliers_accounts.controller';
import { Supplier } from './Entity/SupplierEntity';


  @Module({
    imports:[TypeOrmModule.forFeature([Supplier])],
    controllers: [SuppliersAccountsController],
    providers: [SuppliersAccountsService]
})
export class SuppliersAccountsModule {
  
}
