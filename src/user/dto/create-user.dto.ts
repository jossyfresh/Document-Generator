import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty() fullName: string;
  @IsEmail() email: string;
  @MinLength(6) password: string;
}
