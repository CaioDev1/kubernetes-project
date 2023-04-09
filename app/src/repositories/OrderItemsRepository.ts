import { OrderItem } from "@prisma/client"

export interface OrderItemCreationData {
    id?: number
    orderId: number
    productId: number
    quantity: number
    price: number
}

export interface OrderItemsRepository {
    create(costumer: OrderItemCreationData): Promise<OrderItem>
}