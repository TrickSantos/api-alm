import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClubeDto {
  @IsNotEmpty({ message: 'O nome do evento precisa ser informado!' })
  nome: string;

  @IsOptional()
  logo?: string;

  @IsNotEmpty({ message: 'O país precisa ser informado!' })
  pais: string;

  @IsString()
  regiao: string;

  @IsNotEmpty({ message: 'O código precisa ser informado!' })
  codigo: string;

  @IsOptional()
  ativo?: boolean;
}
