import { Payment } from "@prisma/client"

export interface PaymentCreationData {
    id?: number
    orderId: number
    type: string
    paidAt: string
}

export interface PaymentsRepository {
    create(costumer: PaymentCreationData): Promise<Payment>
}