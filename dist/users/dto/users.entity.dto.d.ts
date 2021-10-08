import { BaseEntity } from 'typeorm';
import { UsersStatusEnum } from './users.status.enum';
export declare class User extends BaseEntity {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    mobile: string;
    home_phone: string;
    work_phone: string;
    work_address: string;
    home_address: string;
    image: string;
    status: UsersStatusEnum.ACTIVE;
    createdAt: Date;
    updatedAt: Date;
}
