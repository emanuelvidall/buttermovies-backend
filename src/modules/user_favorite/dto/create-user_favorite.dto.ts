import { IsNotEmpty, IsInt } from 'class-validator';

export class UserFavoriteDto {
  @IsNotEmpty()
  @IsInt()
  user_id: string;

  @IsNotEmpty()
  @IsInt()
  movie_id: string;
}
