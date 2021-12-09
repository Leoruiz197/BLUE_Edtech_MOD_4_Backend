import { Injectable } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Participante } from '.prisma/client';

@Injectable()
export class ParticipantesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateParticipanteDto): Promise<Participante> {
    return await this.prisma.participante.create({ data });
  }

  async findAll(): Promise<Participante[]> {
    return await this.prisma.participante.findMany();
  }

  async findOne(id: number): Promise<Participante> {
    return await this.prisma.participante.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateParticipanteDto): Promise<Participante> {
    return await this.prisma.participante.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Participante> {
    return await this.prisma.participante.delete({ where: { id } });
  }
}
