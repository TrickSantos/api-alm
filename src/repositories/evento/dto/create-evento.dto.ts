import { IsNotEmpty, IsDateString, IsInt, Min } from 'class-validator';

export class CreateEventoDto {
  @IsNotEmpty({ message: 'O nome do evento precisa ser informado!' })
  nome: string;

  descricao: string;

  @IsNotEmpty({ message: 'A pontuação do evento precisa ser informada!' })
  @IsInt()
  @Min(0, { message: 'A pontuação precisa ser maior que 0 (zero)' })
  pontos: number;

  @IsDateString({}, { message: 'A data inicial precisa ser informada' })
  inicio: Date;

  @IsDateString({}, { message: 'A data final precisa ser informada' })
  fim: Date;
}
