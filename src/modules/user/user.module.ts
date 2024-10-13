import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from '../movie/movie.entity';
import { User } from './user.entity';
import { UserFavorite } from '../user_favorite/user_favorite.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, User, UserFavorite])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
