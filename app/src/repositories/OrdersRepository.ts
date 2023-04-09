import { Order } from "@prisma/client"

export interface OrderCreationData {
    id?: number
    status: string
    costumerId: number
    total: number
}

export interface OrdersRepository {
    create(costumer: OrderCreationData): Promise<Order>
}