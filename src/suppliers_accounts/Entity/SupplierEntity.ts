import { Account } from "../../accounts/Entity/AccountEntity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('supplier')
export class Supplier {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    UserName: String;
  @Column()
  Role:String;
    @Column()
    Password: String;
    @OneToOne(
      type =>Account ,
      (Account) => Account.supplier)
      account:Account
}