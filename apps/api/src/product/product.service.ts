import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { generateRandomString } from 'src/utils/file-upload.utils';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productsRepository: Repository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = {
      sku: generateRandomString(8).toUpperCase(),
      ...createProductDto,
    };

    const product = await this.productsRepository.save(newProduct);
    return product;
  }

  findAll() {
    return this.productsRepository.findAndCount();
  }

  findOne(id: string) {
    return this.productsRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    const hasProduct = await this.findOne(id);
    if (!hasProduct) throw new NotFoundException('Product does not exist');
    await this.productsRepository.delete(id);

    return { message: 'Product successfully deleted', id };
  }
}
