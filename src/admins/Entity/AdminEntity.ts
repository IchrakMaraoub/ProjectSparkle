import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('admin')
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    UserName: string;
    @Column()
    Password: string;
    @Column()
    salt: string; 
  
}