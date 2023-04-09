import {prisma} from '../../prisma'
import { OrderItemCreationData, OrderItemsRepository } from '../OrderItemsRepository'

export class PrismaOrderItemsRepository implements OrderItemsRepository {
    async create(data: OrderItemCreationData) {
        return prisma.orderItem.create({
            data
        })
    }
}