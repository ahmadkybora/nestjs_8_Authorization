import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUsersDto } from './dto/login-users.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(loginUsersDto: LoginUsersDto): Promise<any> {
    const user = await this.authService.login(loginUsersDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}