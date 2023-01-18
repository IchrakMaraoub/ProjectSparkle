import { Product } from "../../products/Entity/ProductsEntity";
import { Review } from "../../reviews/Entity/ReviewEntity";
import { Supplier } from "../../suppliers_accounts/Entity/SupplierEntity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../../orders/Entity/OrdersEntity";

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
    @OneToMany(()=>Order ,(order:Order)=>order.account)
    orders: Order[];

}