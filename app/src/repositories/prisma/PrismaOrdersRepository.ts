import {prisma} from '../../prisma'
import { Order, OrdersRepository } from '../OrdersRepository'

export class PrismaOrdersRepository implements OrdersRepository {
    async create(data: Order) {
        await prisma.order.create({
            data
        })
    }
}