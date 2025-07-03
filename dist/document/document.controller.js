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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentController = void 0;
const common_1 = require("@nestjs/common");
const document_service_1 = require("./document.service");
const user_service_1 = require("../user/user.service");
const create_document_dto_1 = require("./dto/create-document.dto");
const update_document_dto_1 = require("./dto/update.document.dto");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
let DocumentController = class DocumentController {
    documentService;
    userService;
    constructor(documentService, userService) {
        this.documentService = documentService;
        this.userService = userService;
    }
    async create(createDocumentDto, req) {
        const user = (await this.userService.findById(req.user.userId));
        if (!user) {
            throw new Error('Forbidden: User not found');
        }
        return this.documentService.create(user, createDocumentDto);
    }
    async findAll(req) {
        const user = (await this.userService.findById(req.user.userId));
        if (!user) {
            throw new Error('Forbidden: User not found');
        }
        return this.documentService.findall(user);
    }
    async findOne(id, req) {
        const user = (await this.userService.findById(req.user.userId));
        if (!user) {
            throw new Error('Forbidden: User not found');
        }
        return this.documentService.findOne(id, user);
    }
    async update(id, updateDocumentDto, req) {
        const user = (await this.userService.findById(req.user.userId));
        if (!user) {
            throw new Error('Forbidden: User not found');
        }
        return this.documentService.update(id, user, updateDocumentDto);
    }
    async delete(id, req) {
        const user = (await this.userService.findById(req.user.userId));
        if (!user) {
            throw new Error('Forbidden: User not found');
        }
        return this.documentService.remove(id, user);
    }
};
exports.DocumentController = DocumentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_dto_1.CreateDocumentDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_document_dto_1.UpdateDocumentDto, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DocumentController.prototype, "delete", null);
exports.DocumentController = DocumentController = __decorate([
    (0, common_1.Controller)('document'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [document_service_1.DocumentService,
        user_service_1.UserService])
], DocumentController);
//# sourceMappingURL=document.controller.js.map