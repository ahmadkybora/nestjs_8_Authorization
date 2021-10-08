import { BaseEntity } from 'typeorm';
export declare class Token extends BaseEntity {
    id: number;
    userId: number;
    isRevoke: boolean;
    token: string;
    createdAt: Date;
    updatedAt: Date;
}
