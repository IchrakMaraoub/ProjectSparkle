import {IsNotEmpty,IsOptional} from "class-validator";

export class CreateAccountDto {
    id: String;
   
    @IsNotEmpty()
    username: String;
   
    @IsOptional()
    email: String;

    @IsNotEmpty()
    password: String;
}
