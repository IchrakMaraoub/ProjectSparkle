import {IsNotEmpty,IsOptional} from "class-validator";

export class CreateSupplierDto {
    id: string;
   
    @IsNotEmpty()
    username: String;
   
    @IsOptional()
    Role: String;

    @IsNotEmpty()
    password: String;
}
