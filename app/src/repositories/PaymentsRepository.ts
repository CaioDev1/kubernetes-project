export interface Payment {
    id: number
    orderId: number
    type: string
    paidAt: string
    createdAt: string
    updatedAt: string
}

export interface PaymentsRepository {
    create(costumer: Payment): Promise<void>
}