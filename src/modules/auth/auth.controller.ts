import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(200)
  async login(@Body() loginRequestDto: LoginRequestDto) {
    const response = await this.authService.login(loginRequestDto);
    return response;
  }
}
