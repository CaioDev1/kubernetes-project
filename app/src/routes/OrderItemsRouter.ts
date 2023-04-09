import { Router } from 'express'
import { PrismaOrderItemsRepository } from '../repositories/prisma/PrismaOrderItemsRepository'
import { OrderItemsController } from '../controllers/OrderItemsController'

const route = Router()

route.post('/order-items', async (req, res) => {
    const orderItem = req.body

    const prismaOrderItemsRepository = new PrismaOrderItemsRepository()
    const orderItemsRepository = new OrderItemsController(prismaOrderItemsRepository)

    try {
        await orderItemsRepository.create(orderItem)

        res.status(201).send()
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default route