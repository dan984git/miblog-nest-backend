import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ArticlesModule } from './articles/articles.module';
import ormConfig from './config/orm.config';
import ormConfigProd from './config/orm.config.prod';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
      expandVariables: true,
      envFilePath: `${process.env.NODE_ENV ?? 'dev'}.env`,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (
        process.env.NODE_ENV === 'prod' ? ormConfigProd : ormConfig
      )
    }),
    ArticlesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
