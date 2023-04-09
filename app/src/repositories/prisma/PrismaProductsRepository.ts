import {prisma} from '../../prisma'
import { Product, ProductsRepository } from '../ProductsRepository'

export class PrismaProductsRepository implements ProductsRepository {
    async create(data: Product) {
        await prisma.product.create({
            data
        })
    }
}