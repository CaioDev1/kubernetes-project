import { Router } from 'express'
import { PrismaOrdersRepository } from '../repositories/prisma/PrismaOrdersRepository'
import { OrdersController } from '../controllers/OrdersController'
import { OrderCreationData } from '../repositories/OrdersRepository'

const route = Router()

route.post('/orders', async (req, res) => {
    const order: OrderCreationData = req.body

    const prismaOrdersRepository = new PrismaOrdersRepository()
    const ordersController = new OrdersController(prismaOrdersRepository)

    try {
        const data = await ordersController.create(order)

        res.status(201).send(data)
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default route