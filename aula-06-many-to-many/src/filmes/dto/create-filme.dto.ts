/* eslint-disable prettier/prettier */
import { Ator } from '.prisma/client';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateFilmeDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  capa: string;

  @IsNotEmpty()
  @IsString()
  sinopse: string;

  @IsNotEmpty()
  @IsInt()
  generoid: number;
  
}
