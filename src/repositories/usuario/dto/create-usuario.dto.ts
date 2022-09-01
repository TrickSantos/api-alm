import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
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

  @IsEnum(Role)
  funcao: string;

  @IsInt()
  clubeId: number;

  @IsDateString()
  aniversario: Date;

  @IsUrl()
  @IsOptional()
  foto?: string;
}
