import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/dto/users.entity.dto';
import { AuthRepository } from './dto/auth.repository.dto';
import { LoginUsersDto } from './dto/login-users.dto';
import { RegisterUsersDto } from './dto/register-users.dto';
import * as bcrypt from 'bcrypt';
import { Token } from 'src/tokens/dto/tokens.entity.dto';
import { CreateTokensDto } from 'src/tokens/dto/create-tokens.dto';
import * as jwt from 'jsonwebtoken';
import configuration from '../config/configuration';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private authRepository: AuthRepository,
    private jwtService: JwtService,
    //private configService: ConfigService
    //private createTokensDto: CreateTokensDto,
  ) {}

  public async login(loginUsersDto: LoginUsersDto): Promise<any> {
    //const dbUser = this.configService.get<string>('ACCESS_TOKEN_SECRET');
    const { username, password } = loginUsersDto;
    const user = await User.findOne({ 
      where: {
        username: username 
      }
    });

    if (user && (await bcrypt.compare(password, user.password)))
    {
      /*const accessToken = { username: user.username, id: user.id };
      generateToken(username, id){
          return jwt.sign({
            username,
            id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '2h'});
      }*/
      console.log();
        const accessToken = jwt.sign({ 
          username: user.username,
          id: user.id, 
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '2h'});
        console.log(process.env.ACCESS_TOKEN_SECRET);

      //const accessToken = this.jwtService.sign(payload);

      const token = await Token.findOne({
        where: {
            userId: user.id
        }
        });

        if(token){
            await Token.update({
              token: accessToken,
              userId: user.id,
              //expires: Date.now(),
              isRevoke: false,
          },{
              userId: user.id,
            }
          );
        } else {
          //const { userId, isRevoke, token, } = this.createTokensDto;
          const token = await Token.create({
            token: accessToken,
            userId: user.id,
            //expires: Date.now(),
            isRevoke: false,
          }).save();
          //console.log(token);
        }
      return { 
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        accessToken: accessToken, 
      }
    } else {
      throw new UnauthorizedException('your data is not match');
    }
  }

  public async register(registerUsersDto: RegisterUsersDto): Promise<User> {
    return await this.authRepository.register(registerUsersDto);
  }
}
