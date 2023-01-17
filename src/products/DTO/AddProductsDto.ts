import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class addProductDto{
@IsString()
@IsNotEmpty()
theme_name: String;
@IsNotEmpty()
@IsString()
party_type: String;
@IsNotEmpty()
@IsNumber()
cost:Number;
}