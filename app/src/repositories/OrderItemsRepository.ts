export interface OrderItem {
    id: number
    orderId: number
    productId: number
    quantity: number
    price: number
    createdAt: string
    updatedAt: string
}

export interface OrderItemsRepository {
    create(costumer: OrderItem): Promise<void>
}