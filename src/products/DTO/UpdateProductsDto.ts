import { IsOptional } from 'class-validator';

export class UpdateProdctDto
    {
    @IsOptional()
    theme_name: String;

    @IsOptional()
    party_type: String;

    @IsOptional()
    cost: String;
}

function PartialType(CreateAdminDto: any) {
    throw new Error('Function not implemented.');
}
