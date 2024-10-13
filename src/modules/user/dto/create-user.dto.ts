import { IsNotEmpty, IsString, IsInt, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsInt()
  role: number;

  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  @Matches(/^(?=.*[A-Z])(?=.*[\W_]).+$/, {
    message:
      'Password must contain at least one uppercase letter and one special character',
  })
  password: string;
}
