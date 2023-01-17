import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateAccountDto } from './DTO/UpdateAccountDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './Entity/AccountEntity';
import { addAccountDto } from './DTO/AddAccountDto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private AccountRepository: Repository<Account>,
  ){}
  async getAccount(): Promise<Account[]> {
    return await this.AccountRepository.find();
  }
async addAccount(Account:addAccountDto) : Promise<Account>{
  return this.AccountRepository.save(Account);  
}

async updateAccount(id:number,Account:UpdateAccountDto): Promise<Account>{
  const  newAccount = await this.AccountRepository.preload({
    id,
    ...Account
  });
  return await this.AccountRepository.save(newAccount);
if(!newAccount)
{
  throw new NotFoundException('le Account n existe pas ');
}}
 async removeAccount(id : number) {
  
  return await this.AccountRepository.delete(id);
 }

}


