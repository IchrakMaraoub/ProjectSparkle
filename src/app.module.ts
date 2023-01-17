import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AccountsModule } from './accounts/accounts.module';
import { SuppliersAccountsModule } from './suppliers_accounts/suppliers_accounts.module';
import { AdminsModule } from './admins/admins.module';
import { ReviewsModule } from './reviews/reviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [AccountsModule,AdminsModule,SuppliersAccountsModule,ReviewsModule, ProductsModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'Sparkle',
    //entities: [Product,Supplier,Review,Account,Admin],
    autoLoadEntities: true,
    synchronize: true
  }), 
     AccountsModule, SuppliersAccountsModule, AdminsModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
