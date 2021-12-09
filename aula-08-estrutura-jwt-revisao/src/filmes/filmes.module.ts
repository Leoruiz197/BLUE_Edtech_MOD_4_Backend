import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FilmesController],
  providers: [FilmesService],
  imports: [PrismaModule],
})
export class FilmesModule {}
