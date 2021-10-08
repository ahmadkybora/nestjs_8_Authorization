import { CreateUserDto } from './dto/create-users.dto';
import { UpdateUserDto } from './dto/update-users.dto';
import { User } from './dto/users.entity.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUser(req: any, res: any): Promise<User[]>;
    createUser(createdUserDto: CreateUserDto): Promise<User>;
    getUserById(res: any, id: number): Promise<User>;
    updateUser(res: any, id: number, updateUserDto: UpdateUserDto): Promise<User>;
}
