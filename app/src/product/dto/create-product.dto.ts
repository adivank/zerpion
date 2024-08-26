import { IsNotEmpty, IsNumber, IsString } from "class-validator"

type Currency = {
    name: string;
    icon: string;
}

export class CreateProductDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    currency: Currency;
    isOnSale: boolean;
    description: string;
    length: number;
    weight: number;
    images: string[];
}
