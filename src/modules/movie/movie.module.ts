import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../movie/movie.entity';
import { UserFavorite } from '../user_favorite/user_favorite.entity';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, User, UserFavorite])],
  providers: [],
  controllers: [],
})
export class MovieModule {}
