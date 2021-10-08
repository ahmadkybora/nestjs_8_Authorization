import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './create-users.dto';
import { UpdateUserDto } from './update-users.dto';
import { UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/dto/users.entity.dto';
import { LoginUsersDto } from '../../auth/dto/login-users.dto';
import { RegisterUsersDto } from '../../auth/dto/register-users.dto';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async getAllUser(): Promise<User[]> {
    return await User.find({});
  }

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
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
    } = createUserDto;
    const user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.username = username;
    user.email = email;
    user.password = password;
    user.mobile = mobile;
    user.home_phone = home_phone;
    user.work_phone = work_phone;
    user.home_address = home_address;
    user.work_address = work_address;
    user.image = image;
    await this.save(user);

    return user;
  }

  public async getUserById(id: number): Promise<User> {
    return await this.findOne(id);
  }

  public async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
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
    } = updateUserDto;
    const user = await this.findOne(id);
    user.first_name = first_name;
    user.last_name = last_name;
    user.username = username;
    user.email = email;
    user.password = password;
    user.mobile = mobile;
    user.home_phone = home_phone;
    user.work_phone = work_phone;
    user.home_address = home_address;
    user.work_address = work_address;
    user.image = image;
    await this.save(user);
    return user;
  }

  public async login(loginUsersDto: LoginUsersDto): Promise<User> {
    const { username, password } = loginUsersDto;
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
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
    const user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.username = username;
    user.email = email;
    user.password = password;
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
