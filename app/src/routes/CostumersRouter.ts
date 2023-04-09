import { Router } from 'express'
import { PrismaCostumersRepository } from '../repositories/prisma/PrismaCostumersRepository'
import { CostumersController } from '../controllers/CostumersController'

const route = Router()

route.post('/costumers', async (req, res) => {
    const costumer = req.body

    const prismaCostumersRepository = new PrismaCostumersRepository()
    const costumersRepository = new CostumersController(prismaCostumersRepository)

    try {
        await costumersRepository.create(costumer)

        res.status(201).send()
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default route