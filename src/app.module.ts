import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { UserFavoriteModule } from './modules/user_favorite/user_favorite.module';
import { MovieModule } from './modules/movie/movie.module';
import { User } from './modules/user/user.entity';
import { Movie } from './modules/movie/movie.entity';
import { UserFavorite } from './modules/user_favorite/user_favorite.entity';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [User, Movie, UserFavorite],
        synchronize: true,
        dropSchema: true,
        // logging: ['query', 'error'],
      }),
    }),
    UserModule,
    UserFavoriteModule,
    MovieModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
