import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(loginDto: LoginDto): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        user: {
            id: any;
            fullName: any;
            email: any;
            role: any;
        };
        access_token: string;
    }>;
}
