import { OrderItem } from "@prisma/client";
import { OrderItemCreationData, OrderItemsRepository } from "../repositories/OrderItemsRepository";

export class OrderItemsController {
    constructor(
        private orderItemsRepository: OrderItemsRepository
    ) {

    }

    create(orderItem: OrderItemCreationData): Promise<OrderItem> {
        if(!orderItem) throw new Error('Creation data payload must be included')

        return this.orderItemsRepository.create(orderItem)
    }
}