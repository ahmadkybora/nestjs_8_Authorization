import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { User } from './dto/users.entity.dto';
import { UserRepository } from './dto/users.repository.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UserRepository);
    getAllUser(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserById(id: number): Promise<User>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>;
}
