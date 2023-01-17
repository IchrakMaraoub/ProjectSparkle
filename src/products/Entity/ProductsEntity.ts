
import { Account } from "../../accounts/Entity/AccountEntity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

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
    @ManyToMany(
        type => Account,
        (Account) =>Account.products,
        )
        accounts:Account[];
      
}