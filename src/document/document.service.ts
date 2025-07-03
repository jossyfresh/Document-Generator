import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateDocumentDto } from './dto/create-document.dto';
import { User } from 'src/user/user.entity';
import { UpdateDocumentDto } from './dto/update.document.dto';

const prisma = new PrismaClient();

@Injectable()
export class DocumentService {
  async create(user: User, createDocumentDto: CreateDocumentDto) {
    return prisma.document.create({
      data: {
        ...createDocumentDto,
        ownerId: user.id,
      },
    });
  }

  async findall(user: User) {
    if (user.role !== 'ADMIN') {
      const documents = await prisma.document.findMany({
        where: { ownerId: user.id },
      });
      return documents;
    }
    // return all documents if user is an Admin
    const documents = await prisma.document.findMany();
    if (!documents || documents.length === 0) {
      throw new NotFoundException('No documents found');
    }
    return documents;
  }

  async findOne(id: string, user: User) {
    const document = await prisma.document.findUnique({
      where: { id },
    });
    if (!document) {
      throw new NotFoundException(`Document with id ${id} not found`);
    }
    if (document.ownerId !== user.id && user.role !== 'ADMIN') {
      throw new ForbiddenException(
        `Document with id ${id} does not belong to user ${user.id}`,
      );
    }
    return document;
  }
  // only the owner or user with an Admin role can update or delete the document
  async update(id: string, user: User, updateDocumentDto: UpdateDocumentDto) {
    const document = await prisma.document.findUnique({
      where: { id },
    });
    if (!document) {
      throw new NotFoundException(`Document not found`);
    }
    if (document.ownerId !== user.id && user.role !== 'ADMIN') {
      throw new ForbiddenException(
        `User is not allowed to update this document`,
      );
    }
    return prisma.document.update({
      where: { id: document.id },
      data: updateDocumentDto,
    });
  }

  async remove(id: string, user: User) {
    const document = await prisma.document.findUnique({
      where: { id },
    });
    if (!document) {
      throw new NotFoundException(`Document with id ${id} not found`);
    }
    if (document.ownerId !== user.id && user.role !== 'ADMIN') {
      throw new ForbiddenException(
        `User is not allowed to delete this document`,
      );
    }
    return prisma.document.delete({
      where: { id: document.id },
    });
  }
}
