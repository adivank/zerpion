import { IsNotEmpty } from 'class-validator';

type Currency = {
  name: string;
  icon: string;
};

export class CreateProductDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  description: string;
}
