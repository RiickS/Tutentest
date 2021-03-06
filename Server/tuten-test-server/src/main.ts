import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({ origin: ["http://localhost:3000"], allowedHeaders: 'Access-Control-Allow-Origin, Content-type' });
  await app.listen(4000);
}
bootstrap();