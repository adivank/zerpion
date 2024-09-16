import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  // const uploadDir = join(process.cwd(), 'uploads');
  // if (existsSync(uploadDir)) {
  //   mkdirSync(uploadDir);
  // }
  app.use('/uploads', express.static(join(process.cwd(), 'uploads')));
  await app.listen(process.env.APP_PORT);
}
bootstrap();
