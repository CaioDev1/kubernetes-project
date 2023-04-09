import { NextFunction, Request, Response, Router } from 'express'
import { PrismaCostumersRepository } from '../repositories/prisma/PrismaCostumersRepository'
import { CostumersController } from '../controllers/CostumersController'
import { CostumerCreationData } from '../repositories/CostumersRepository'
import { routeSchemaValidator } from '../middlewares/routeSchemaValidator'
import Joi from 'joi'

const route = Router()

const prismaCostumersRepository = new PrismaCostumersRepository()
const costumersController = new CostumersController(prismaCostumersRepository)

route.post('/costumers', [
    routeSchemaValidator(
        Joi.object({
            name: Joi.string().required(),
            address: Joi.string().required(),
            email: Joi.string().required().email(),
            password: Joi.string().required()
        }),
    )
],async (req: Request, res: Response, next: NextFunction) => {
    const costumer: CostumerCreationData = req.body
    
    try {
        const data = await costumersController.create(costumer)

        res.status(201).send(data)
    } catch (error: any) {
        next(error)
    }
})

route.get('/costumers', async (req, res, next) => {
    try {
        const data = await costumersController.getAll()

        res.status(201).send(data)
    } catch (error: any) {
        next(error)
    }
})

export default route