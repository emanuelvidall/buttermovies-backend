import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginRequestDto } from './dto/login-request.dto';
import * as bcrypt from 'bcrypt';
import { AuthResponse } from './auth.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signIn(loginRequestDto: LoginRequestDto): Promise<AuthResponse> {
    const { username, password } = loginRequestDto;
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new UnauthorizedException('Incorrect username or password');
    }
    const hash = user.password;
    const isMatch = await bcrypt.compare(password, hash);

    if (isMatch == false) {
      throw new UnauthorizedException('Incorrect username or password');
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
