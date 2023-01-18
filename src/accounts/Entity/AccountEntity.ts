import { Order } from "../../orders/Entity/OrdersEntity";
import { Product } from "../../products/Entity/ProductsEntity";
import { Review } from "../../reviews/Entity/ReviewEntity";
import { Supplier } from "../../suppliers_accounts/Entity/SupplierEntity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('account')
export class Account {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    UserName: String;
  
    @Column()
    Email: String;
 
    @Column()
    Password: String;
    @OneToOne(
        type =>Supplier ,
        (Supplier) => Supplier.account,)
        supplier:Supplier;
        @OneToMany(
            type =>Review ,
            (Review) => Review.account,)
            reviews:Review[];
            @ManyToOne(
                type => Product,
                (Product) =>Product.accounts,
                )
               product:Product;
              
}