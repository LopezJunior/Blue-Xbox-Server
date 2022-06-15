import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Usuário',
    example: 'Lopez',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Nickname do usuário',
    example: 'Lopez',
  })
  nickname: string;

  @IsString()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'Lopez@gmail.com',
  })
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha de acesso do usuário',
    example: 'Lopez@11111',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha de login',
    example: 'Lopez@11111',
  })
  confirmPassword: string;

  @IsString()
  @MaxLength(15)
  @ApiProperty({
    description: 'CPF do usuário',
    example: 48071261564,
  })
  cpf: string;

  @IsBoolean()
  @ApiProperty({
    example: false,
  })
  isAdmin: boolean;
}