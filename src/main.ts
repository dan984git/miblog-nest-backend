import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const whitelist = ["https://miblog.danielburbano.com"];
  var corsOptions = {
    origin: whitelist,
  }

  const app = await NestFactory.create(AppModule, { logger: ['error', 'warn', 'debug', 'log'] });
  app.setGlobalPrefix('api');
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
