import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/dto/users.entity.dto';
import { AuthRepository } from './dto/auth.repository.dto';
import { LoginUsersDto } from './dto/login-users.dto';
import { RegisterUsersDto } from './dto/register-users.dto';
export declare class AuthService {
    private authRepository;
    private jwtService;
    constructor(authRepository: AuthRepository, jwtService: JwtService);
    login(loginUsersDto: LoginUsersDto): Promise<any>;
    register(registerUsersDto: RegisterUsersDto): Promise<User>;
}
