import { IsNotEmpty, IsString } from "class-validator";

export class addAdminDto{
@IsString()
@IsNotEmpty()
UserName: string;
@IsNotEmpty()
@IsString()
Password: string;
}