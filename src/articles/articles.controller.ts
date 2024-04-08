import { Body, Controller, Delete, Get, HttpCode, Logger, Param, Patch, Post } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from "typeorm";
import { Article } from "./articles.entity";
import { CreateArticleDto } from "./create-article.dto";
import { UpdateArticleDto } from "./update-article.dto";

@Controller('articles')
export class ArticlesController {
    private readonly logger = new Logger(ArticlesController.name);

    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>
    ) { }

    @Get()
    async findAll() {
        return await this.articleRepository.find();
    }

    @Get('best')
    async findAllOutStanding() {
        const article = await this.articleRepository.find({
            where: { outstanding: 1 }
        })

        if (article == null) {
            this.logger.log(`Hit ${article}`);
            return [];
        } else {
            return article;
        }
    }

    @Get('find/:req')
    async findAllBy(@Param('req') req) {
        this.logger.log(`Hit the findAllBy route ${req}`);
        const article = await this.articleRepository.find({
            where: [{
                title: Like(`%${req}%`)
            }, {
                description: Like(`%${req}%`)
            }, {
                author: Like(`%${req}%`),
            }]
        })
        if (article == null) {
            return [];
        } else {
            return article;
        }
    }

    @Get(":id")
    async findOne(@Param('id') id) {
        const article = await this.articleRepository.findOne({
            where: { id: id }
        })

        if (article == null) {
            return [];
        } else {
            return article;
        }
    }

    @Post()
    async create(@Body() input: CreateArticleDto) {

        return await this.articleRepository.save(
            {
                ...input,
                date: new Date(input.date),
                outstanding: 0
            }
        );
    }

    @Patch(":id")
    async update(@Param('id') id, @Body() input: UpdateArticleDto) {
        const article = await this.articleRepository.findOneBy(
            {
                id: id
            }
        );

        return await this.articleRepository.save(
            {
                ...article,
                ...input,
                date: input.date ?
                    new Date(input.date) : article.date,
                outstanding: input.outstanding
            }
        );

    }

    @Delete(":id")
    @HttpCode(204)
    async remove(@Param('id') id) {
        const article = await this.articleRepository.findOneBy({
            id: id
        });

        await this.articleRepository.remove(article)
    };
}
