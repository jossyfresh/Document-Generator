import { DocumentService } from './document.service';
import { UserService } from 'src/user/user.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update.document.dto';
export declare class DocumentController {
    private readonly documentService;
    private readonly userService;
    constructor(documentService: DocumentService, userService: UserService);
    create(createDocumentDto: CreateDocumentDto, req: any): Promise<{
        id: string;
        title: string;
        content: string;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(req: any): Promise<{
        id: string;
        title: string;
        content: string;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string, req: any): Promise<{
        id: string;
        title: string;
        content: string;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateDocumentDto: UpdateDocumentDto, req: any): Promise<{
        id: string;
        title: string;
        content: string;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string, req: any): Promise<{
        id: string;
        title: string;
        content: string;
        ownerId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
