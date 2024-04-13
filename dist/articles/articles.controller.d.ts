import { Repository } from "typeorm";
import { Article } from "./articles.entity";
import { CreateArticleDto } from "./create-article.dto";
import { UpdateArticleDto } from "./update-article.dto";
export declare class ArticlesController {
    private readonly articleRepository;
    private readonly logger;
    constructor(articleRepository: Repository<Article>);
    findAll(): Promise<Article[]>;
    findAllOutStanding(): Promise<Article[]>;
    findAllBy(req: any): Promise<Article[]>;
    findOne(id: any): Promise<Article>;
    create(input: CreateArticleDto): Promise<{
        date: Date;
        outstanding: number;
        title: string;
        description: string;
        image: string;
        author: string;
        text: string;
    } & Article>;
    update(id: any, input: UpdateArticleDto): Promise<{
        date: Date;
        outstanding: number;
        title: string;
        description: string;
        image: string;
        author: string;
        text: string;
        id: number;
    } & Article>;
    remove(id: any): Promise<void>;
}
