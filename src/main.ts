import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { WsExceptionFilter } from 'ws.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new WsExceptionFilter());
  await app
    .listen(config.get('PORT'))
    .then(() => console.log(`Running on port: ${config.get('PORT')}`));
}
bootstrap();
