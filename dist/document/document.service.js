"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let DocumentService = class DocumentService {
    async create(user, createDocumentDto) {
        return prisma.document.create({
            data: {
                ...createDocumentDto,
                ownerId: user.id,
            },
        });
    }
    async findall(user) {
        if (user.role !== 'ADMIN') {
            const documents = await prisma.document.findMany({
                where: { ownerId: user.id },
            });
            return documents;
        }
        const documents = await prisma.document.findMany();
        if (!documents || documents.length === 0) {
            throw new common_1.NotFoundException('No documents found');
        }
        return documents;
    }
    async findOne(id, user) {
        const document = await prisma.document.findUnique({
            where: { id },
        });
        if (!document) {
            throw new common_1.NotFoundException(`Document with id ${id} not found`);
        }
        if (document.ownerId !== user.id && user.role !== 'ADMIN') {
            throw new common_1.ForbiddenException(`Document with id ${id} does not belong to user ${user.id}`);
        }
        return document;
    }
    async update(id, user, updateDocumentDto) {
        const document = await prisma.document.findUnique({
            where: { id },
        });
        if (!document) {
            throw new common_1.NotFoundException(`Document not found`);
        }
        if (document.ownerId !== user.id && user.role !== 'ADMIN') {
            throw new common_1.ForbiddenException(`User is not allowed to update this document`);
        }
        return prisma.document.update({
            where: { id: document.id },
            data: updateDocumentDto,
        });
    }
    async remove(id, user) {
        const document = await prisma.document.findUnique({
            where: { id },
        });
        if (!document) {
            throw new common_1.NotFoundException(`Document with id ${id} not found`);
        }
        if (document.ownerId !== user.id && user.role !== 'ADMIN') {
            throw new common_1.ForbiddenException(`User is not allowed to delete this document`);
        }
        return prisma.document.delete({
            where: { id: document.id },
        });
    }
};
exports.DocumentService = DocumentService;
exports.DocumentService = DocumentService = __decorate([
    (0, common_1.Injectable)()
], DocumentService);
//# sourceMappingURL=document.service.js.map