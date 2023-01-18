import { Account } from "../../accounts/Entity/AccountEntity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    
}