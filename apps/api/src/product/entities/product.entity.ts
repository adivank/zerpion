import { ProductImageEntity } from './product-image.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ProductThumbnailEntity } from './product-thumbnail.entity';

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

  @Column({ name: 'category', default: '', charset: 'utf8mb4' })
  category: string;

  @Column({ name: 'description', charset: 'utf8mb4' })
  description: string;

  @OneToMany(() => ProductImageEntity, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images: ProductImageEntity[];

  @OneToOne(() => ProductThumbnailEntity, { cascade: true, eager: true })
  @JoinColumn()
  thumbnail: ProductThumbnailEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
