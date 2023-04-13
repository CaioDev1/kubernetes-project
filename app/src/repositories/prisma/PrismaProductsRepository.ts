import {prisma} from '../../prisma'
import { ProductCreationData, ProductsRepository } from '../ProductsRepository'

export class PrismaProductsRepository implements ProductsRepository {
    async create(data: ProductCreationData) {
        return prisma.product.create({
            data
        })
    }

    async getAll() {
        return prisma.product.findMany()
    }
}