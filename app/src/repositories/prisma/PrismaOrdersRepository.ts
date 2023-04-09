import {prisma} from '../../prisma'
import { OrderCreationData, OrdersRepository } from '../OrdersRepository'

export class PrismaOrdersRepository implements OrdersRepository {
    async create(data: OrderCreationData) {
        return prisma.order.create({
            data
        })
    }
}