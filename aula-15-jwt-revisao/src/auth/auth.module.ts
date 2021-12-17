import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        PassportModule.register({
          defaultStrategy: 'jwt',
          property: 'user',
          session: false,
        }),
        JwtModule.register({
          secret: process.env.SECRETKEY,
          signOptions: {
            expiresIn: '300s',
          },
        }),
      ],
      providers: [UsuariosService, PrismaService, AuthService, JwtStrategy],
      controllers: [AuthController],
      exports: [PassportModule, JwtModule],
})
export class AuthModule {}
