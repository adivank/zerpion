import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product_thumbnails' })
export class ProductThumbnailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  imageName: string;
}
