import { Shipping } from "@prisma/client"

export interface ShippingCreationData {
    id?: number
    orderId: number
    transmitter: string
    trackingNumber: string
    shippedAt: Date
}

export interface ShippingsRepository {
    create(costumer: ShippingCreationData): Promise<Shipping>
}