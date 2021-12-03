import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const lista = [];

@Injectable()
export class FilmesService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) {}

  create(createFilmeDto: CreateFilmeDto) {
    lista.push(createFilmeDto);
    return `Add com sucesso filme: ${createFilmeDto.nome}`;
  }

  async createPrisma(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.create({
      data: { ...createFilmeDto },
    });
  }

  findAll() {
    return lista;
  }

  findOne(id: number) {
    return lista[id];
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) {
    return `This action updates a #${id} filme`;
  }

  remove(id: number) {
    delete lista[id];
    return `deletado com sucesso id: ${id}`;
  }
}
