import { IsOptional } from 'class-validator';
//import { CreateAdminDto } from './CreateAdminDto';

//export class UpdateUserDto extends PartialType(CreateAdminDto) {
    export class UpdateSupplierDto
    {
    @IsOptional()
    username: String;

    @IsOptional()
    Role: String;

    @IsOptional()
    password: String;
}