import { User } from 'src/users/dto/users.entity.dto';
import { Repository } from 'typeorm';
import { LoginUsersDto } from './login-users.dto';
import { RegisterUsersDto } from './register-users.dto';
import { UserRepository } from 'src/users/dto/users.repository.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthRepository extends Repository<any> {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    login(loginUsersDto: LoginUsersDto): Promise<any>;
    register(registerUsersDto: RegisterUsersDto): Promise<User>;
}
