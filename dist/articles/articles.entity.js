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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const typeorm_1 = require("typeorm");
let Article = class Article {
};
exports.Article = Article;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ar_id' }),
    __metadata("design:type", Number)
], Article.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, name: 'ar_title' }),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, name: 'ar_description' }),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ar_date' }),
    __metadata("design:type", Date)
], Article.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, name: 'ar_image' }),
    __metadata("design:type", String)
], Article.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, name: 'ar_author' }),
    __metadata("design:type", String)
], Article.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ar_outstanding' }),
    __metadata("design:type", Number)
], Article.prototype, "outstanding", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 9999, name: 'ar_text' }),
    __metadata("design:type", String)
], Article.prototype, "text", void 0);
exports.Article = Article = __decorate([
    (0, typeorm_1.Entity)('article', { name: 'article' })
], Article);
//# sourceMappingURL=articles.entity.js.map