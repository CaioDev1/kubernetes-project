import { Costumer } from "@prisma/client";
import { CostumerCreationData, CostumersRepository } from "../repositories/CostumersRepository";
import exclude from '../utils/prisma/excludeAttribute'
import bcrypt from 'bcryptjs'

export class CostumersController {
    constructor(
        private costumersRepository: CostumersRepository
    ) {

    }

    async create(costumerCreationData: CostumerCreationData) {
        const costumer = await this.costumersRepository.create(costumerCreationData)

        return exclude<Costumer, 'password'>(costumer, ['password'])
    }

    async getAll() {
        const costumers = await this.costumersRepository.getAll()

        return costumers.map(costumer => {
            const costumerWithoutPassword = exclude<Costumer, 'password'>(costumer, ['password', ])
            
            return costumerWithoutPassword
        })
    }

    async login(loginParams: Pick<Costumer, 'email' | 'password'>) {
        const costumer = await this.costumersRepository.findByEmail(loginParams.email)

        if(!costumer) throw new Error('Costumer not found')

        const passwordVerify = await bcrypt.compare(loginParams.password, costumer.password)

        if(!passwordVerify) throw new Error('Wrong password')

        return exclude<Costumer, 'password'>(costumer, ['password'])
    }
}