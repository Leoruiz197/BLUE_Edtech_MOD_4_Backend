import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsuariosModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
