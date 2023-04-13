import { NextFunction, Request, Response, Router } from 'express'
import { PrismaProductsRepository } from '../repositories/prisma/PrismaProductsRepository'
import { ProductsController } from '../controllers/ProductsController'
import { ProductCreationData } from '../repositories/ProductsRepository'
import { routeSchemaValidator } from '../middlewares/routeSchemaValidator'
import Joi from 'joi'

const route = Router()

const prismaPaymentsRepository = new PrismaProductsRepository()
const productsController = new ProductsController(prismaPaymentsRepository)

route.post('/products', [
    routeSchemaValidator(
        Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.number().required(),
            stock: Joi.number().required(),
            category: Joi.string().required(),
        }),
    )
], async (req: Request, res: Response, next: NextFunction) => {
    const product: ProductCreationData  = req.body
    
    try {
        const data = await productsController.create(product)

        res.status(201).send(data)
    } catch (error: any) {
        next(error)
    }
})

route.get('/products', async (req, res, next) => {
    try {
        const data = await productsController.getAll()

        res.status(200).send(data)
    } catch (error: any) {
        next(error)
    }
})

export default route