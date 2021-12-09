import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuariosService) {}

  async login(loginUserDto: LoginDto) {
    const user = await this.usuarioService.findByLogin(loginUserDto);

    return;
  }
}
