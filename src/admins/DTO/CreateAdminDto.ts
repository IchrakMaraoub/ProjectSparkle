import {IsNotEmpty,IsOptional} from "class-validator";

export class CreateAdminDto {
    id: string;
   
    @IsNotEmpty()
    username: string;
   
   

    @IsNotEmpty()
    password: string;
}
