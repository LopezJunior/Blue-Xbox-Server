import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Need for speed Heat',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Capa do Jogo',
    example:
      'https://notadogame.com/uploads/game/cover/150x185/5d744cd96d3c2.jpg',
  })
  coverImageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'Trabalhe de dia e arrisque tudo à noite no Need for Speed Heat, um jogo de corrida emocionante que coloca você lado a lado contra a polícia corrupta da cidade, competindo nos eventos de elite das corridas de rua.',
  })
  description: string;

  @IsNumber()
  @ApiProperty({
    description: 'Ano de lançamento',
    example: 2019,
  })
  year: number;

  @IsNumber()
  @ApiProperty({
    description: 'Pontuação do jogo no IMB',
    example: 7,
  })
  imbScore: number;

  @IsUrl()
  @ApiProperty({
    description: 'Trailer do jogo',
    example: 'https://www.youtube.com/watch?v=p4Q3uh2RaZo',
  })
  trailerYoutubeUrl: string;

  @IsUrl()
  @ApiProperty({
    description: 'Gameplay',
    example: 'https://www.youtube.com/watch?v=IaCB77sci1c',
  })
  gameplayYouTubeUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Gênero do jogo',
    example: 'Corrida'
  })
  genreGame?: string;
}