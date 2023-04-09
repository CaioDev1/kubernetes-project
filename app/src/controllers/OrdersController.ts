import { Order } from "@prisma/client";
import { OrderCreationData, OrdersRepository } from "../repositories/OrdersRepository";

export class OrdersController {
    constructor(
        private ordersRepository: OrdersRepository
    ) {

    }

    create(order: OrderCreationData): Promise<Order> {
        if(!order) throw new Error('Creation data payload must be included')

        return this.ordersRepository.create(order)
    }
}