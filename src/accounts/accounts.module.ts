import { Module } from '@nestjs/common';
import { Account } from './Entity/AccountEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './accounts.controller';
import { AccountsService } from './accounts.service';


  @Module({
    imports:[TypeOrmModule.forFeature([Account])],
    controllers: [AccountController],
    providers: [AccountsService]
})
export class AccountsModule {}
