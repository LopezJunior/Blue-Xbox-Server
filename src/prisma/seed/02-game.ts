import { Prisma, PrismaClient } from "@prisma/client";

export const games: Prisma.GamesCreateInput[] = [
  {
    title: 'Counter Strike Global Ofensive',
    coverImageUrl: 'http://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6',
    description: 'Global Offensive é um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia',
    year: 2012,
    imbScore: 7.7,
    trailerYoutubeUrl: 'https://www.youtube.com/watch?v=edYCtaNueQY',
    gameplayYouTubeUrl: 'https://www.youtube.com/watch?v=KnpljMWwy3o'
  },
  {
    title: 'PlayerUnknowns Battlegrounds',
    coverImageUrl: 'https://m.media-amazon.com/images/M/MV5BNDYzODQ0OTAtNmMyOS00Njg5LThkYzctZGVkM2MwMWIzYTZmXkEyXkFqcGdeQXVyNzg3NjQyOQ@@._V1_.jpg',
    description: 'Batle-Royale',
    year: 2017,
    imbScore: 6.4,
    trailerYoutubeUrl: 'https://www.youtube.com/watch?v=OUeQjwzSbc4',
    gameplayYouTubeUrl: 'https://www.youtube.com/watch?v=lsXMumRLo6I'
  },
  {
    title: 'Call of Duty: Vanguard',
    coverImageUrl: 'https://upload.wikimedia.org/wikipedia/pt/8/89/Call_of_Duty_%E2%80%93_Vanguard.png',
    description: 'Fps',
    year: 2021,
    imbScore: 6.0,
    trailerYoutubeUrl: 'https://www.youtube.com/watch?v=OQ1CwPhE8KQ',
    gameplayYouTubeUrl: 'https://www.youtube.com/watch?v=j4S24UiWjNI',
  }
]

export const game = async (prisma: PrismaClient) => {
  for (const obj of Object.values(games)) {
    await prisma.games.upsert({
      where: {title: obj.title},
      update: {},
      create: {
        ...obj,
      }
    })
  }
}
