import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";

export class addOrderDto{
@IsDate()
@IsNotEmpty()
order_Date: Date;
@IsNotEmpty()
@IsString()
paiement_method: String;
}