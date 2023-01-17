import { IsOptional } from 'class-validator';
//import { CreateAdminDto } from './CreateAdminDto';

//export class UpdateUserDto extends PartialType(CreateAdminDto) {
    export class UpdateAdminDto
    {
    @IsOptional()
    username: string;

   

    @IsOptional()
    password: string;
}