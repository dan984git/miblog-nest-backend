import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['error', 'warn', 'debug', 'log'] });
  app.enableCors({
    origin: ["https://miblog.danielburbano.com", "http:localhost:5173"]
  })
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
