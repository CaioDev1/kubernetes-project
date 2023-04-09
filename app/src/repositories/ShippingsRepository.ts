export interface Shipping {
    id: number
    orderId: number
    transmitter: string
    trackingNumber: string
    shippedAt: string
    createdAt: string
    updatedAt: string
}

export interface ShippingsRepository {
    create(costumer: Shipping): Promise<void>
}