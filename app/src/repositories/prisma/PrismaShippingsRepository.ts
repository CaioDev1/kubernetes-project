import {prisma} from '../../prisma'
import { Shipping, ShippingsRepository } from '../ShippingsRepository'

export class PrismaShippingsRepository implements ShippingsRepository {
    async create(data: Shipping) {
        await prisma.shipping.create({
            data
        })
    }
}