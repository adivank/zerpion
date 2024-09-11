import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { ImageDTO } from './image.dto';

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
  @ValidateNested()
  @Type(() => ImageDTO)
  images: ImageDTO[];
  category: string;
}
