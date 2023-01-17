import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Account } from './Entity/AccountEntity';
import { addAccountDto } from './DTO/AddAccountDto';
import { AccountsService } from './accounts.service';
import { UpdateAccountDto } from './DTO/UpdateAccountDto';


@Controller('account')
export class AccountController {
  constructor(private AccountService: AccountsService) {}

 
  @Get()
 async getAllAccount() : Promise<Account[]>{
    return  await this.AccountService.getAccount();
  }
  @Post ()
  async addAccount(
@Body() addAccountDto:addAccountDto):Promise<Account>{
  return await this.AccountService.addAccount(addAccountDto);}
@Patch ()
async updateAccount(
@Body() UpdateAccountDto:UpdateAccountDto,
@Param('id') id:number):Promise<Account>{
return await this.AccountService.updateAccount(id,UpdateAccountDto);
}
@Delete(':id')
async removeAccount(
  @Param('id' , ParseIntPipe) id:number
){
  return await this.AccountService.removeAccount(id);
}
}