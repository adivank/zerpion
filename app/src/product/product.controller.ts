import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/file-upload.utils';
import { ProductEntity } from './entities/product.entity';
import { ProductImageEntity } from './entities/product-image.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async create(
    @Body() body: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('hey');
    const { name, description, price, category } = body;
    const { path, originalname } = file;

    const image = new ProductImageEntity();
    image.url = `http://localhost:3001/${path}`;

    const newProduct = new ProductEntity();
    newProduct.name = name;
    newProduct.description = description;
    newProduct.price = price;
    newProduct.category = category;
    newProduct.images = [image];

    console.log(newProduct);

    this.productService.create(newProduct);

    // const { name, category, price, description } = body;
    // const newProduct = {
    //   name,
    //   price,
    //   description,
    //   category,
    //   images: [],
    // };
    // newProduct.images.push(file);
    // const productData = await this.productService.create(newProduct);
    // return {
    //   ...productData,
    // };
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
