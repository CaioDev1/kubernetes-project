import {prisma} from '../../prisma'
import { Costumer, CostumersRepository } from '../CostumersRepository'

export class PrismaCostumersRepository implements CostumersRepository {
    async create(data: Costumer) {
        await prisma.costumer.create({
            data
        })
    }
}