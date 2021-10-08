import { UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/dto/users.entity.dto';
import { EntityRepository, Repository } from 'typeorm';
import { LoginUsersDto } from './login-users.dto';
import { RegisterUsersDto } from './register-users.dto';
//import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { UserRepository } from 'src/users/dto/users.repository.dto';
import { JwtService } from '@nestjs/jwt';

@EntityRepository(User)
export class AuthRepository extends Repository<any> {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {
    super();
  }

  public async login(loginUsersDto: LoginUsersDto): Promise<any> {
    const { username, password } = loginUsersDto;
    const user = await User.findOne({ 
      where: {
        username: username 
      }
    });
    //const user = await this.userRepository.findOne(username);
    console.log(user);
    //console.log(user.password);
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { username: user.username, sub: user.id };
      //const accessToken = this.jwtService.sign(payload);
      return { accessToken: this.jwtService.sign(payload), }
    } else {
      throw new UnauthorizedException('your data is not match');
    }
  }

  public async register(registerUsersDto: RegisterUsersDto): Promise<User> {
    const {
      first_name,
      last_name,
      username,
      email,
      password,
      mobile,
      home_phone,
      work_phone,
      home_address,
      work_address,
      image,
    } = registerUsersDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.username = username;
    user.email = email;
    user.password = hashedPassword;
    user.mobile = mobile;
    user.home_phone = home_phone;
    user.work_phone = work_phone;
    user.home_address = home_address;
    user.work_address = work_address;
    user.image = image;
    await this.save(user);
    return user;
  }
}
