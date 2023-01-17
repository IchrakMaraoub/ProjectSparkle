import { IsOptional } from 'class-validator';
//import { CreateAdminDto } from './CreateAdminDto';

//export class UpdateUserDto extends PartialType(CreateAdminDto) {
    export class UpdateAccountDto
    {
    @IsOptional()
    username: String;

    @IsOptional()
    email: String;

    @IsOptional()
    password: String;
}