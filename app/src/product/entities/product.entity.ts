import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
