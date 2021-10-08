import { IsString, MaxLength, MinLength } from 'class-validator';
import { BaseEntity } from 'typeorm';

export class LoginUsersDto extends BaseEntity {
  @IsString()
  @MinLength(3)
  @MaxLength(25)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(25)
  password: string;
}
