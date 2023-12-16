import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService();
  const PORT = Number(configService.get('PORT'));
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ origin: '*' });
  app.use(cookieParser());
  await app.listen(PORT, () => {
    console.log(`Server start ${PORT}`);
  });
}
bootstrap();
