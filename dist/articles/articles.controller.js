"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ArticlesController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const articles_entity_1 = require("./articles.entity");
const create_article_dto_1 = require("./create-article.dto");
const update_article_dto_1 = require("./update-article.dto");
let ArticlesController = ArticlesController_1 = class ArticlesController {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
        this.logger = new common_1.Logger(ArticlesController_1.name);
    }
    async findAll() {
        return await this.articleRepository.find();
    }
    async findAllOutStanding() {
        const article = await this.articleRepository.find({
            where: { outstanding: 1 }
        });
        if (!article) {
            throw new common_1.NotFoundException();
        }
        return article;
    }
    async findAllBy(req) {
        this.logger.log(`Hit the findAllBy route ${req}`);
        const article = await this.articleRepository.find({
            where: [{
                    title: (0, typeorm_2.Like)(`%${req}%`)
                }, {
                    description: (0, typeorm_2.Like)(`%${req}%`)
                }, {
                    author: (0, typeorm_2.Like)(`%${req}%`),
                }]
        });
        if (!article) {
            throw new common_1.NotFoundException();
        }
        return article;
    }
    async findOne(id) {
        const article = await this.articleRepository.findOne({
            where: { id: id }
        });
        if (!article) {
            throw new common_1.NotFoundException();
        }
        return article;
    }
    async create(input) {
        return await this.articleRepository.save({
            ...input,
            date: new Date(input.date),
            outstanding: 0
        });
    }
    async update(id, input) {
        const article = await this.articleRepository.findOneBy({
            id: id
        });
        if (!article) {
            throw new common_1.NotFoundException();
        }
        return await this.articleRepository.save({
            ...article,
            ...input,
            date: input.date ?
                new Date(input.date) : article.date,
            outstanding: input.outstanding
        });
    }
    async remove(id) {
        const article = await this.articleRepository.findOneBy({
            id: id
        });
        if (!article) {
            throw new common_1.NotFoundException();
        }
        await this.articleRepository.remove(article);
    }
    ;
};
exports.ArticlesController = ArticlesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('best'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findAllOutStanding", null);
__decorate([
    (0, common_1.Get)('find/:req'),
    __param(0, (0, common_1.Param)('req')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findAllBy", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_article_dto_1.UpdateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "remove", null);
exports.ArticlesController = ArticlesController = ArticlesController_1 = __decorate([
    (0, common_1.Controller)('articles'),
    __param(0, (0, typeorm_1.InjectRepository)(articles_entity_1.Article)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArticlesController);
//# sourceMappingURL=articles.controller.js.map