import { IsOptional } from 'class-validator';

export class UpdateOrderDto
    {
    @IsOptional()
    order_Date: Date;

    @IsOptional()
    paiement_method: String;

    @IsOptional()
    paid: boolean;
    @IsOptional()
    flower_order:String 
    @IsOptional()
        deco_order:String
        @IsOptional()
        cake_order:String
        @IsOptional()
        balloons_order:String
        @IsOptional()
        snacks_order:String
        @IsOptional()
        order_status:String 
}


