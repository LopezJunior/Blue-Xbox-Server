import { Prisma, PrismaClient } from '@prisma/client';

export const genrers: Prisma.GendersCreateInput[] = [
  {
    name: 'Fps',
  },
  {
    name: 'Rpg',
  },
  {
    name: 'Mmo',
  },
  {
    name: 'Ação',
  },
  {
    name: 'Aventura',
  },
];

export const genrer = async (prisma: PrismaClient) => {
  for (const obj of Object.values(genrers)) {
    await prisma.genders.upsert({
      where: {name: obj.name},
      update: {},
      create: {
        ...obj,
      }
    })
  }
}
