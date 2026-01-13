import {IsBoolean, IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1, { message: 'Name must be at least 1 character' })
  @MaxLength(15, { message: 'Name must be at most 15 characters' })
  public name!: string;

  @IsEmail({}, { message: 'Invalid email format' })
  public email!: string;

  @IsOptional()
  @IsString()
  @Matches(/\.(jpg|png)$/i, { message: 'Avatar must be a JPG or PNG image' })
  public avatarUrl?: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @MaxLength(12, { message: 'Password must be at most 12 characters' })
  public password!: string;

  @IsBoolean({ message: 'User must be either pro or standart' })
  public isPro: boolean;
}
