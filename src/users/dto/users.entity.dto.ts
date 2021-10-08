import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { UsersStatusEnum } from './users.status.enum';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column()
  @Unique(["username"])
  username: string;

  @Column()
  @Unique(["email"])
  email: string;

  @Column()
  password: string;

  @Column()
  @Unique(["mobile"])
  mobile: string;

  @Column()
  home_phone: string;

  @Column()
  work_phone: string;

  @Column()
  work_address: string;

  @Column()
  home_address: string;

  @Column()
  image: string;

  @Column({ default: true })
  status: UsersStatusEnum.ACTIVE;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public createdAt: Date;
  
  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updatedAt: Date;
}
