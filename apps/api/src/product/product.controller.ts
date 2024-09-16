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
  UploadedFiles,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/file-upload.utils';
import { ProductEntity } from './entities/product.entity';
import { ProductThumbnailEntity } from './entities/product-thumbnail.entity';
import { ProductImageEntity } from './entities/product-image.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'thumbnail', maxCount: 1 },
        { name: 'images', maxCount: 20 },
      ],
      {
        storage: diskStorage({
          destination: (req, file, cb) => {
            if (file.fieldname === 'thumbnail')
              return cb(null, './uploads/thumbnails');
            return cb(null, './uploads/images');
          },
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      },
    ),
  )
  async create(
    @Body() body: CreateProductDto,
    @UploadedFiles()
    files: { images: Express.Multer.File[]; thumbnail: Express.Multer.File },
  ) {
    const { name, description, price, category } = body;
    const thumbnailPath = files.thumbnail[0].path;
    const thumbnailName = files.thumbnail[0].filename;

    const thumbnail = new ProductThumbnailEntity();
    thumbnail.url = `${process.env.APP_URL}/${thumbnailPath}`;
    thumbnail.imageName = thumbnailName;

    const newProduct = new ProductEntity();
    newProduct.name = name;
    newProduct.description = description;
    newProduct.price = price;
    newProduct.category = category;
    newProduct.thumbnail = thumbnail;
    newProduct.images = [];

    files.images.forEach((fileImage) => {
      const productImage = new ProductImageEntity();
      productImage.url = `${process.env.APP_URL}/${fileImage.path}`;
      newProduct.images.push(productImage);
    });

    return this.productService.create(newProduct);
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
