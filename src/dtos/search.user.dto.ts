import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class SearchUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  number?: string;
}
