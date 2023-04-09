import { Router } from 'express'
import { PrismaProductsRepository } from '../repositories/prisma/PrismaProductsRepository'
import { ProductsController } from '../controllers/ProductsController'
import { ProductCreationData } from '../repositories/ProductsRepository'

const route = Router()

route.post('/products', async (req, res) => {
    const product: ProductCreationData = req.body

    const prismaCPaymentsRepository = new PrismaProductsRepository()
    const productsController = new ProductsController(prismaCPaymentsRepository)

    try {
        const data = await productsController.create(product)

        res.status(201).send(data)
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default route