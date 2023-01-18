import { IsOptional } from 'class-validator';

export class UpdateOrderDto
    {
    @IsOptional()
    order_Date: Date;

    @IsOptional()
    paiement_method: String;

    @IsOptional()
    paid: boolean;
}


