import { Module } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { ParticipantesController } from './participantes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ParticipantesController],
  providers: [ParticipantesService],
  imports: [PrismaModule],
})
export class ParticipantesModule {}
