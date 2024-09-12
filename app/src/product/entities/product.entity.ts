import { ProductImageEntity } from './product-image.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'sku' })
  sku: string;

  @Column({ name: 'name', nullable: false, charset: 'utf8mb4' })
  name: string;

  @Column({ name: 'price', nullable: false })
  price: number;

  @Column({ name: 'category', default: '' })
  category: string;

  @Column({ name: 'description' })
  description: string;

  @OneToMany(() => ProductImageEntity, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images: ProductImageEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
