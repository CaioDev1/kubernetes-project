import { PrismaClient } from '@prisma/client'
import { EncryptCostumerPassword } from './middlewares/prisma/CostumerPasswordHashMiddleware'

export const prisma = new PrismaClient()

prisma.$use(EncryptCostumerPassword)