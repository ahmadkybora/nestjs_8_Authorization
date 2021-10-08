import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  first_name: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  last_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;

  @IsString()
  @MinLength(11)
  @MaxLength(12)
  mobile: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  home_phone: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  work_phone: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  home_address: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  work_address: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  image: string;
}
