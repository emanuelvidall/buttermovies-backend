import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { UserFavorite } from '../user_favorite/user_favorite.entity';

@Entity('movie')
export class Movie {
  //reference to the tmdb id so theres no need for primary generated column
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  release_date: Date;

  @OneToMany(() => UserFavorite, (user_favorites) => user_favorites.movie)
  user_favorites: UserFavorite[];
}
