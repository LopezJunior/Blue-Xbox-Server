import { Prisma, PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import { cpf } from "cpf-cnpj-validator";

export const users: Prisma.UserCreateInput[] = [
  {
    name: 'Lopez',
    nickname: 'The_Lopez',
    email: 'Lopez@gmail.com',
    password: 'lopez2020',
    cpf: '285.475.018-43',
    isAdmin: true,
  },
  {
    name: 'Indio Ana Jones',
    nickname: 'Indio_Ana_jones',
    email: 'indioanajones@gmail.com',
    password: 'indioAmazona',
    cpf: '105.897.153-67',
    isAdmin: false,
  },
  {
    name: 'Wili',
    nickname: 'Wili_ParaBala',
    email: 'wilian@gmail.com',
    password: 'wilidograu',
    cpf: '108.152.670-07',
    isAdmin: false,
  }
]

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: {nickname: obj.nickname},
      update: {},
      create: {
        ...obj,
        password: await bcrypt.hash(obj.password, 10),
        cpf: cpf.format(obj.cpf)
      }
    })
  }
}
