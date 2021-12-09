import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Controller('participantes')
export class ParticipantesController {
  constructor(private readonly participantesService: ParticipantesService) {}

  @Post()
  create(@Body() createParticipanteDto: CreateParticipanteDto) {
    return this.participantesService.create(createParticipanteDto);
  }

  @Get()
  findAll() {
    return this.participantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.participantesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParticipanteDto: UpdateParticipanteDto) {
    return this.participantesService.update(+id, updateParticipanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.participantesService.remove(+id);
  }
}
