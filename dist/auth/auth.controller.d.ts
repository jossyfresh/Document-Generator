import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    login(loginDto: LoginDto): Promise<{
        user: {
            id: any;
            fullName: any;
            email: any;
            role: any;
        };
        access_token: string;
    }>;
    register(createUserDto: CreateUserDto): Promise<{
        fullName: string;
        email: string;
        password: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
