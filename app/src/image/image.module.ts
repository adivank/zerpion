import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { ImageService } from './image.service';

@Module({
  imports: [TypeOrmModule.forFeature([Image])],
  controllers: [],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
