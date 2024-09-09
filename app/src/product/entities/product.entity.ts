import { Image } from 'src/image/entities/image.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  sku: string;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  description: string;
  @OneToMany(() => Image, (image) => image.product)
  images: Image[];
}
