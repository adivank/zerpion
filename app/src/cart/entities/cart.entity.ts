import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
  @Column()
  totalPrice: number;
}
