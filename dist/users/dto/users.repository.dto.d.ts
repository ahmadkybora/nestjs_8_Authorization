import { Repository } from 'typeorm';
import { CreateUserDto } from './create-users.dto';
import { UpdateUserDto } from './update-users.dto';
import { User } from 'src/users/dto/users.entity.dto';
import { LoginUsersDto } from '../../auth/dto/login-users.dto';
import { RegisterUsersDto } from '../../auth/dto/register-users.dto';
export declare class UserRepository extends Repository<User> {
    getAllUser(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserById(id: number): Promise<User>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    login(loginUsersDto: LoginUsersDto): Promise<User>;
    register(registerUsersDto: RegisterUsersDto): Promise<User>;
}
