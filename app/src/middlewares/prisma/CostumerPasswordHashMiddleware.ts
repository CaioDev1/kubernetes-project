import { Prisma } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { CostumerCreationData } from '../../repositories/CostumersRepository'

export const EncryptCostumerPassword: Prisma.Middleware = async (params: Prisma.MiddlewareParams, next) => {
    if(params.model == 'Costumer' && params.action == 'create') {
        const costumer: CostumerCreationData = params.args.data

        const salt = bcrypt.genSaltSync(10)

        const hash = bcrypt.hashSync(costumer.password, salt)

        costumer.password = hash
    }

    return await next(params)
}  

