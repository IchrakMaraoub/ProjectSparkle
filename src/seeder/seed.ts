import { NestFactory } from "@nestjs/core";
import { randAddress, randBrand, randCity, randEmail, randJobTitle, randNumber, random, randPassword, randSoonDate, randText, randUserName } from "@ngneat/falso";
import { AppModule } from "../app.module";
import { Account } from "../accounts/Entity/AccountEntity";
import { Supplier } from "../suppliers_accounts/Entity/SupplierEntity";
import { SuppliersAccountsService } from "../suppliers_accounts/suppliers_accounts.service";
import { ProductsService } from "../products/products.service";
import { Product } from "../products/Entity/ProductsEntity";
import { ReviewsService } from "../reviews/reviews.service";
import { Review } from "../reviews/Entity/ReviewEntity";
import { AccountsService } from "../accounts/accounts.service";
import { AdminsService } from "../admins/admins.service";
import { Admin } from "../admins/Entity/AdminEntity";
import { OrdersService } from "../orders/orders.service";
import { Order } from "../orders/Entity/OrdersEntity";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const SuppliersService = app.get(SuppliersAccountsService);
  const AccountService = app.get(AccountsService);
  const ReviewService = app.get(ReviewsService);
  const AdminService = app.get(AdminsService);
  const OrderService=app.get(OrdersService);
  const ProductService=app.get(ProductsService)
  for (let i = 0; i < 10; i++) {
    const newSupplier = new Supplier();
    newSupplier.UserName = randUserName();
    newSupplier.Role = randJobTitle();
    newSupplier.Password = randPassword();
    await SuppliersService.addSupplier(newSupplier);

    const newAccount = new Account();
    newAccount.UserName = randUserName();
    newAccount.Email = randEmail();
    newAccount.Password = randPassword();
    await AccountService.addAccount(newAccount)
    const newReview = new Review()
    newReview.text = randText();
    await ReviewService.addReview(newReview)

    const newAdmin = new Admin()
    newAdmin.UserName = randUserName();
    newAdmin.Password = randPassword();
    await AdminService.addAdmin(newAdmin)

    const newOrder= new Order
    newOrder.account=newAccount
    newOrder.order_Date=randSoonDate();
    newOrder.location=randCity()
    const product= new Product
    product.cost=4000
    product.party_type='wedding'
    product.theme_name='extravagant'
    newOrder.product=product
    await ProductService.addProduct(product)
    await OrderService.addOrder(newOrder)
  }
  await app.close();
}
bootstrap();

