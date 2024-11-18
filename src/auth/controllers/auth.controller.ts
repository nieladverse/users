import { Body, Controller, Post, UnauthorizedException, UsePipes, ValidationPipe, Headers } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('logout')
  logout(@Headers('authorization') token: string) {
    // Remover 'Bearer ' del token
    const tokenWithoutBearer = token?.replace('Bearer ', '');
    
    if (!tokenWithoutBearer) {
      throw new UnauthorizedException('Token no proporcionado');
    }
    
    return this.authService.logout(tokenWithoutBearer);
  }

  @Post('renew-token')
  renewToken(@Body('refreshToken') refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token no proporcionado');
    }
    
    return this.authService.renewToken(refreshToken);
  }
}
