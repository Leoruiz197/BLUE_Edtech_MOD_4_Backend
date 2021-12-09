import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Usuario, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UsuarioCreateInput): Promise<Usuario> {
    data.senha = await bcrypt.hash(data.senha, 10);
    return await this.prisma.usuario.create({ data });
  }

  async findByLogin(login: CreateUsuarioDto): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: login.email,
      },
    });

    if (!user) {
      throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND);
    }

    const senhaIgual = await bcrypt.compare(login.senha, user.senha);

    if (!senhaIgual) {
      throw new HttpException('Senha invalida', HttpStatus.UNAUTHORIZED);
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
