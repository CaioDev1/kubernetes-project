import { OrderItem, OrderItemsRepository } from "../repositories/OrderItemsRepository";


export class OrderItemsController {
    constructor(
        private orderItemsRepository: OrderItemsRepository
    ) {

    }

    create(orderItem: OrderItem): Promise<void> {
        return this.orderItemsRepository.create(orderItem)
    }
}