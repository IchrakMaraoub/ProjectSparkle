
import { Order } from "../../orders/Entity/OrdersEntity";
import { Account } from "../../accounts/Entity/AccountEntity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    @ManyToOne(
        type => Account,
        (Account) =>Account.product,
        )
       accounts:Account[];
      
}