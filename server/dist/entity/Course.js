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
exports.Course = void 0;
const typeorm_1 = require("typeorm");
const Comment_1 = require("./Comment");
const Professor_1 = require("./Professor");
const Textbook_1 = require("./Textbook");
let Course = class Course {
    constructor() {
        this.difficulty = [];
        this.quality = [];
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Course.prototype, "department", void 0);
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Course.prototype, "number", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', array: true }),
    __metadata("design:type", Array)
], Course.prototype, "difficulty", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', array: true }),
    __metadata("design:type", Array)
], Course.prototype, "quality", void 0);
__decorate([
    typeorm_1.OneToMany(() => Textbook_1.Textbook, textbook => textbook.course),
    __metadata("design:type", Array)
], Course.prototype, "textbooks", void 0);
__decorate([
    typeorm_1.OneToMany(() => Comment_1.Comment, comment => comment.course),
    __metadata("design:type", Array)
], Course.prototype, "comments", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Professor_1.Professor),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Course.prototype, "professors", void 0);
Course = __decorate([
    typeorm_1.Entity()
], Course);
exports.Course = Course;
//# sourceMappingURL=Course.js.map