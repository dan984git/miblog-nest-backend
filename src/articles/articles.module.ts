import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './articles.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    controllers: [ArticlesController]
})
export class ArticlesModule { }
