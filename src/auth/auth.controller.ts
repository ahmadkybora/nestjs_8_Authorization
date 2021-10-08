import { Body, Controller, Post, Request, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/dto/users.entity.dto';
import { AuthService } from './auth.service';
import { LoginUsersDto } from './dto/login-users.dto';
import { RegisterUsersDto } from './dto/register-users.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  //@UseGuards(AuthGuard('local'))
  //@UseGuards(LocalAuthGuard)
  @Post('/api/login')
  public async login(
    @Response() res,
    @Request() req,
    @Body() loginUsersDto: LoginUsersDto,
  ): Promise<any> {
    //console.log(req.body)
    const user = await this.authService.login(loginUsersDto);
    if (user)
      return res.json({
        status: true,
        message: 'Success',
        data: user,
      });
  }

  @Post('/api/register')
  public async register(
    @Response() res,
    @Request() req,
    @Body() registerUsersDto: RegisterUsersDto,
  ): Promise<User> {
    const user = await this.authService.register(registerUsersDto);
    if (user)
      return res.json({
        status: true,
        message: 'Success',
        data: user,
      });
  }
}
