import { Type } from 'class-transformer';
import { IsNotEmpty, IsDate, IsString, IsInt } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Date)
  release_date: Date;
}
