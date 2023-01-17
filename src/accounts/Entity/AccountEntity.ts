import { Product } from "../../products/Entity/ProductsEntity";
import { Review } from "../../reviews/Entity/ReviewEntity";
import { Supplier } from "../../suppliers_accounts/Entity/SupplierEntity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    @OneToMany(
        type =>Supplier ,
        (Supplier) => Supplier.account,)
        suppliers:Supplier[];
        @OneToMany(
            type =>Review ,
            (Review) => Review.account,)
            reviews:Review[];
            @ManyToMany(
                type => Product,
                (Product) =>Product.accounts,
                )
                products:Product[];
              
}