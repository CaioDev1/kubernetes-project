import { Router } from 'express'
import { PrismaOrdersRepository } from '../repositories/prisma/PrismaOrdersRepository'
import { OrdersController } from '../controllers/OrdersController'

const route = Router()

route.post('/orders', async (req, res) => {
    const order = req.body

    const prismaOrdersRepository = new PrismaOrdersRepository()
    const ordersRepository = new OrdersController(prismaOrdersRepository)

    try {
        await ordersRepository.create(order)

        res.status(201).send()
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default route