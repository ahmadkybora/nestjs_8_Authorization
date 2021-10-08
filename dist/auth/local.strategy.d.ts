import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { LoginUsersDto } from './dto/login-users.dto';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(loginUsersDto: LoginUsersDto): Promise<any>;
}
export {};
