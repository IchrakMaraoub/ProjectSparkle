
import { Account } from "../../accounts/Entity/AccountEntity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../../orders/Entity/OrdersEntity";

@Entity('product')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    theme_name: String;
    @Column()
    party_type:String;
    @Column()
    cost:Number;
    @OneToMany(()=>Order ,(order:Order)=>order.product)
    orders: Order[];
      
}