import {prisma} from '../../prisma'
import { CostumerCreationData, CostumersRepository } from '../CostumersRepository'

export class PrismaCostumersRepository implements CostumersRepository {
    async create(data: CostumerCreationData) {
        return prisma.costumer.create({
            data
        })
    }

    async getAll() {
        return prisma.costumer.findMany({
            
        })
    }

    async findByEmail(email: string) {
        return prisma.costumer.findUnique({
            where: {email}
        })
    }
}