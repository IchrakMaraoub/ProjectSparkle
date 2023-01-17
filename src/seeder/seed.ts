import { NestFactory } from "@nestjs/core";
import { randBrand, randEmail, randJobTitle, randNumber, randPassword, randText, randUserName } from "@ngneat/falso";
import { AppModule } from "../app.module";
import { Account } from "../accounts/Entity/AccountEntity";
import { Supplier } from "../suppliers_accounts/Entity/SupplierEntity";
import { SuppliersAccountsService } from "../suppliers_accounts/suppliers_accounts.service";
import { ProductsService } from "../products/products.service";
import { Product } from "../products/Entity/ProductsEntity";
import { ReviewsService } from "../reviews/reviews.service";
import { Review } from "../reviews/Entity/ReviewEntity";
import { AccountsService } from "../accounts/accounts.service";

async function bootstrap () {
    const app = await NestFactory.createApplicationContext(AppModule);
  const SuppliersService = app.get(SuppliersAccountsService);
  const AccountService = app.get(AccountsService);
  const ProductService = app.get(ProductsService);
const ReviewService= app.get(ReviewsService)
    for (let i=0;i<10;i++){
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
        
        const newProduct = new Product();
        newProduct.theme_name= randBrand();
        newProduct.party_type= randBrand();
        newProduct.cost= randNumber();
        await ProductService.addProduct(newProduct);
        newProduct.accounts = [newAccount];
    }
    await app.close();
}
bootstrap();

