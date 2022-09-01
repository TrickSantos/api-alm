import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateClubeDto {
  @IsNotEmpty({ message: 'O nome do evento precisa ser informado!' })
  nome: string;

  @IsOptional()
  logo?: string;

  @IsNotEmpty({ message: 'O nome do evento precisa ser informado!' })
  cidade: string;

  @IsOptional()
  ativo?: boolean;
}
