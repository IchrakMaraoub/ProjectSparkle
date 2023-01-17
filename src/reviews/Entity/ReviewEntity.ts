import { Account } from "../../accounts/Entity/AccountEntity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('review')
export class Review {
    @PrimaryGeneratedColumn()
    id: number;
  
  @Column()
    text: String;
    @ManyToOne(
      type =>Account ,
      (Account) => Account.reviews)
      account:Account
    }