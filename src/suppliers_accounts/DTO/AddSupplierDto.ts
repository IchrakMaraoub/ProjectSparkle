import { IsNotEmpty, IsString } from "class-validator";

export class addSupplierDto{
@IsString()
@IsNotEmpty()
UserName: String;
@IsNotEmpty()
@IsString()
Role: String;
@IsNotEmpty()
@IsString()
Password: String;
}