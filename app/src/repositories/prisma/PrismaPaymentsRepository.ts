import {prisma} from '../../prisma'
import { Payment, PaymentsRepository } from '../PaymentsRepository'

export class PrismaPaymentsRepository implements PaymentsRepository {
    async create(data: Payment) {
        await prisma.payment.create({
            data
        })
    }
}