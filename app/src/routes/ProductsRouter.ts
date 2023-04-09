import { Router } from 'express'
import { PrismaProductsRepository } from '../repositories/prisma/PrismaProductsRepository'
import { ProductsController } from '../controllers/ProductsController'

const route = Router()

route.post('/products', async (req, res) => {
    const product = req.body

    const prismaCPaymentsRepository = new PrismaProductsRepository()
    const productsRepository = new ProductsController(prismaCPaymentsRepository)

    try {
        await productsRepository.create(product)

        res.status(201).send()
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default route