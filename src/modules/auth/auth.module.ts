import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from '../user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserModule, User])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
