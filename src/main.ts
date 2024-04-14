import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  var corsOptions = {
    origin: "https://miblog.danielburbano.com",
  }

  const app = await NestFactory.create(AppModule, { logger: ['error', 'warn', 'debug', 'log'] });
  app.setGlobalPrefix('api');
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
