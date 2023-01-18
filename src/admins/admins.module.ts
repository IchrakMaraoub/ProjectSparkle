import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './Entity/AdminEntity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';


  @Module({
    imports:[TypeOrmModule.forFeature([Admin]),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
        secret: process.env.SECRET,
        signOptions: {
          expiresIn: 3600
        }
      })],
    controllers: [AdminsController],
    providers: [AdminsService]
})
export class AdminsModule {}
