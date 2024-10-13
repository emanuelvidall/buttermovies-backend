import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '../user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginRequestDto } from './dto/login-request.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async login(loginRequestDto: LoginRequestDto): Promise<string> {
    const { username, password } = loginRequestDto;
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new UnauthorizedException('Incorrect username or password');
    }
    const hash = user.password;
    const isMatch = await bcrypt.compare(password, hash);

    if (isMatch == false) {
      throw new UnauthorizedException('Incorrect username or password');
    } else {
      return 'Logged in successfully!';
    }
  }
}
