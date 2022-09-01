import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
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
  email: string;

  @IsString()
  password: string;

  @IsEnum(Role)
  funcao: string;

  @IsInt()
  clubeId: number;

  @IsDateString()
  aniversario: Date;

  @IsUrl()
  foto?: string;
}
