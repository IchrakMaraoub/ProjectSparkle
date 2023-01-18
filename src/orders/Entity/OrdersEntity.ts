
import { Product } from "../../products/Entity/ProductsEntity";
import { Account } from "../../accounts/Entity/AccountEntity";
import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('order')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    order_Date: Date;
    @Column()
    paiement_method:String;
    @Column()
    paid:Boolean;
   
}