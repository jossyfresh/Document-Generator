import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    create(createUserDto: CreateUserDto): Promise<{
        fullName: string;
        email: string;
        password: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findByEmail(email: string): Promise<{
        fullName: string;
        email: string;
        password: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
    } | null>;
    findById(id: string): Promise<{
        fullName: string;
        email: string;
        password: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
    } | null>;
}
