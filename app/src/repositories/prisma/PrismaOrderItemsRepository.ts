import {prisma} from '../../prisma'
import { OrderItem, OrderItemsRepository } from '../OrderItemsRepository'

export class PrismaOrderItemsRepository implements OrderItemsRepository {
    async create(data: OrderItem) {
        await prisma.orderItem.create({
            data
        })
    }
}