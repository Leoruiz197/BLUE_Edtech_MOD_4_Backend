import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';
import { Usuario } from '@prisma/client';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUsuarioDto): Promise<Usuario> {
    data.senha = await bcrypt.hash(data.senha, 10);
    return await this.prisma.usuario.create({ data });
  }

  async findByLogin(login: CreateUsuarioDto): Promise<Usuario>{
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: login.email,
      },
    })

    if(!user) {
      throw new HttpException('usuario nao encontrado',HttpStatus.NOT_FOUND);
    }

    const senhaIgual = await bcrypt.compare(login.senha, user.senha);

    if (!senhaIgual) {
      throw new HttpException('senha invalida', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
