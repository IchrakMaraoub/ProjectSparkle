import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AccountsModule } from './accounts/accounts.module';
import { SuppliersAccountsModule } from './suppliers_accounts/suppliers_accounts.module';
import { AdminsModule } from './admins/admins.module';
import { ReviewsModule } from './reviews/reviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/Entity/OrdersEntity';
import { Account } from './accounts/Entity/AccountEntity';
import { Review } from './reviews/Entity/ReviewEntity';
import { Admin } from './admins/Entity/AdminEntity';
import { Supplier } from './suppliers_accounts/Entity/SupplierEntity';
import { Product } from './products/Entity/ProductsEntity';

@Module({
  imports: [AccountsModule,AdminsModule,SuppliersAccountsModule,ReviewsModule, ProductsModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'Sparkle',
    entities: [Product,Supplier,Review,Account,Admin, Order],
    synchronize: true
  }), 
     AccountsModule, SuppliersAccountsModule, AdminsModule, ReviewsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
