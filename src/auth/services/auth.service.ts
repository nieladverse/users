import { Inject, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/services/user.service';

export class AuthService {
  private readonly jwtSecret = process.env.JWT_SECRET;
  private blacklistedTokens: Set<string> = new Set();
  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    try {
      // Simular búsqueda de usuario (reemplazar con tu lógica de base de datos)
      const user = await this.usersService.findByEmail(loginDto.email);

      if (!user) {
        throw new UnauthorizedException('Credenciales inválidas');
      }

      // Validar contraseña
      const isPasswordValid = await this.comparePasswords(
        loginDto.password,
        user.password,
      );

      if (!isPasswordValid) {
        throw new UnauthorizedException('Credenciales inválidas');
      }

      // Generar tokens
      const accessToken = this.generateAccessToken(user);
      const refreshToken = this.generateRefreshToken(user);

      return {
        user: {
          id: user.id,
          email: user.email,
          // otros campos que quieras devolver
        },
        accessToken,
        refreshToken,
      };
    } catch (error) {
      throw new UnauthorizedException('Error al iniciar sesión');
    }
  }

  logout(token: string) {
    // Agregar token a lista negra para invalidarlo
    this.blacklistedTokens.add(token);
    return { message: 'Logout exitoso' };
  }

  async renewToken(refreshToken: string) {
    try {
      // Verificar si el refresh token está en la lista negra
      if (this.blacklistedTokens.has(refreshToken)) {
        throw new UnauthorizedException('Token inválido');
      }

      // Verificar y decodificar el refresh token
      const decoded = this.jwtService.verify(refreshToken, {
        secret: this.jwtSecret,
      });

      // Buscar usuario (reemplazar con tu lógica de base de datos)
      const user = await this.usersService.findByEmail(decoded.email);

      if (!user) {
        throw new UnauthorizedException('Usuario no encontrado');
      }

      // Generar nuevo access token
      const newAccessToken = this.generateAccessToken(user);

      return {
        accessToken: newAccessToken,
      };
    } catch (error) {
      throw new UnauthorizedException('No se pudo renovar el token');
    }
  }

  private generateAccessToken(user: any): string {
    return this.jwtService.sign(
      {
        sub: user.id,
        email: user.email,
      },
      {
        secret: this.jwtSecret,
        expiresIn: '15m', // Token de acceso de corta duración
      },
    );
  }

  private generateRefreshToken(user: any): string {
    return this.jwtService.sign(
      {
        sub: user.id,
        email: user.email,
      },
      {
        secret: this.jwtSecret,
        expiresIn: '7d', // Token de refresco de larga duración
      },
    );
  }

  private async comparePasswords(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
