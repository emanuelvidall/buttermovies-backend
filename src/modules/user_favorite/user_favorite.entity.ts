import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';

@Entity('user_favorite')
export class UserFavorite {
  @PrimaryColumn()
  user_id: number;
  movie_id: number;

  @ManyToOne(() => User, (user) => user.user_favorites)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.user_favorites)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;
}
