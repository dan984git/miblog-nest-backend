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
      load: [ormConfigProd], //ormConfig
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (
        ormConfigProd // ormConfig
      )
    }),
    ArticlesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
