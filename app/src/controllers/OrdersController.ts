import { Order, OrdersRepository } from "../repositories/OrdersRepository";


export class OrdersController {
    constructor(
        private ordersRepository: OrdersRepository
    ) {

    }

    create(order: Order): Promise<void> {
        return this.ordersRepository.create(order)
    }
}