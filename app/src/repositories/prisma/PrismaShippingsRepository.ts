import {prisma} from '../../prisma'
import { ShippingCreationData, ShippingsRepository } from '../ShippingsRepository'

export class PrismaShippingsRepository implements ShippingsRepository {
    async create(data: ShippingCreationData) {
        return prisma.shipping.create({
            data
        })
    }
}