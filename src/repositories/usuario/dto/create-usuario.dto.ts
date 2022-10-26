import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

enum Role {
  'desbravador',
  'administrador',
  'diretoria',
  'apoio',
  'staff',
}

export class CreateUsuarioDto {
  @IsString()
  nome: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  codigo?: string;

  @IsEnum(Role)
  funcao: string;

  @IsInt()
  clubeId: number;

  @IsBoolean()
  @IsOptional()
  ativo?: boolean;
}
