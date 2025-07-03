import { CreateDocumentDto } from './dto/create-document.dto';
import { User } from 'src/user/user.entity';
import { UpdateDocumentDto } from './dto/update.document.dto';
export declare class DocumentService {
    create(user: User, createDocumentDto: CreateDocumentDto): Promise<{
        id: string;
        title: string;
        content: string;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findall(user: User): Promise<{
        id: string;
        title: string;
        content: string;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string, user: User): Promise<{
        id: string;
        title: string;
        content: string;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, user: User, updateDocumentDto: UpdateDocumentDto): Promise<{
        id: string;
        title: string;
        content: string;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string, user: User): Promise<{
        id: string;
        title: string;
        content: string;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
