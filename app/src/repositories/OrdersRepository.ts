export interface Order {
    id: number
    status: string
    costumerId: number
    total: number
    createdAt: string
    updatedAt: string
}

export interface OrdersRepository {
    create(costumer: Order): Promise<void>
}