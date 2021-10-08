import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CreateTokensDto {
  @IsNumber()
  userId: Number;

  @IsBoolean()
  isRevoke: Boolean;

  @IsString()
  @IsNotEmpty()
  token: String;

  @IsDate()
  expires: Date;
}
