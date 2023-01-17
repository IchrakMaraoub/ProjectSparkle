import { IsNotEmpty, IsString } from "class-validator";

export class addAccountDto{
@IsString()
@IsNotEmpty()
UserName: String;
@IsNotEmpty()
@IsString()
Email: String;
@IsNotEmpty()
@IsString()
Password: String;
}