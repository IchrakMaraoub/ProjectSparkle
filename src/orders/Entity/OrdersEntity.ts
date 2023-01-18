
import { Product } from "../../products/Entity/ProductsEntity";
import { Account } from "../../accounts/Entity/AccountEntity";
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Transform } from "class-transformer";

@Entity('order')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    order_Date: Date;
    @Column()
    location:string
    @Column()
    paiement_method: String;
    @Column({ default: false })
    paid: Boolean;
    @Column({ default: 'not ready' })
    flower_order: String
    @Column({ default: 'not ready' })
    deco_order: String
    @Column({ default: 'not ready' })
    cake_order: String
    @Column({ default: 'not ready' })
    balloons_order: String
    @Column({ default: 'not ready' })
    snacks_order: String
    @Column({ default: 'not ready' })
    order_status: String
    @ManyToOne(()=>Account ,(account:Account)=>account.orders)
    account: Account
    @ManyToOne(()=>Product,(product:Product)=>product.orders)
    product:Product
    


}