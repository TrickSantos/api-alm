import { IsInt } from 'class-validator';

export class IndexUsuarioDto {
  @IsInt()
  clubeId?: number;
}
