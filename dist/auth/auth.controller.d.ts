import { User } from 'src/users/dto/users.entity.dto';
import { AuthService } from './auth.service';
import { LoginUsersDto } from './dto/login-users.dto';
import { RegisterUsersDto } from './dto/register-users.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(res: any, req: any, loginUsersDto: LoginUsersDto): Promise<any>;
    register(res: any, req: any, registerUsersDto: RegisterUsersDto): Promise<User>;
}
