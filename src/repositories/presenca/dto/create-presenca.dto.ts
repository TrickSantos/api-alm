import { IsNotEmpty, IsInt } from 'class-validator';

export class CreatePresencaDto {
  @IsNotEmpty({ message: 'O clube precisa ser informado!' })
  @IsInt()
  clubeId: number;

  @IsNotEmpty({ message: 'O clube precisa ser informado!' })
  @IsInt()
  usuarioId: number;

  @IsNotEmpty({ message: 'O clube precisa ser informado!' })
  @IsInt()
  eventoId: number;
}
