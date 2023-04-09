import { Router } from 'express'
import { PrismaCostumersRepository } from '../repositories/prisma/PrismaCostumersRepository'
import { CostumersController } from '../controllers/CostumersController'
import { CostumerCreationData } from '../repositories/CostumersRepository'

const route = Router()

route.post('/costumers', async (req, res) => {
    const costumer: CostumerCreationData = req.body
    
    const prismaCostumersRepository = new PrismaCostumersRepository()
    const costumersController = new CostumersController(prismaCostumersRepository)

    try {
        const data = await costumersController.create(costumer)

        res.status(201).send(data)
    } catch (error: any) {
        console.log(error)
        res.status(400).json({
            error: error.message,
            stack: error.stack
        })
    }
})

export default route