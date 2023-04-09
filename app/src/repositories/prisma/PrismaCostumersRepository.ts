import {prisma} from '../../prisma'
import { CostumerCreationData, CostumersRepository } from '../CostumersRepository'

export class PrismaCostumersRepository implements CostumersRepository {
    async create(data: CostumerCreationData) {
        return prisma.costumer.create({
            data
        })
    }
}