import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { User } from './dto/users.entity.dto';
import { UserRepository } from './dto/users.repository.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  public async getAllUser(): Promise<User[]> {
    return await this.userRepository.getAllUser();
  }

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(createUserDto);
  }

  public async getUserById(id: number): Promise<User> {
    return await this.userRepository.getUserById(id);
  }

  public async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return await this.userRepository.updateUser(id, updateUserDto);
  }
}
