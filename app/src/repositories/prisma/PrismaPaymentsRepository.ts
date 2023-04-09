import {prisma} from '../../prisma'
import { PaymentCreationData, PaymentsRepository } from '../PaymentsRepository'

export class PrismaPaymentsRepository implements PaymentsRepository {
    async create(data: PaymentCreationData) {
        return prisma.payment.create({
            data
        })
    }
}