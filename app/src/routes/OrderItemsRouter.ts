import { Router } from 'express'
import { PrismaOrderItemsRepository } from '../repositories/prisma/PrismaOrderItemsRepository'
import { OrderItemsController } from '../controllers/OrderItemsController'
import { OrderItemCreationData } from '../repositories/OrderItemsRepository'

const route = Router()

route.post('/order-items', async (req, res) => {
    const orderItem: OrderItemCreationData = req.body

    const prismaOrderItemsRepository = new PrismaOrderItemsRepository()
    const orderItemsController = new OrderItemsController(prismaOrderItemsRepository)

    try {
        const data = await orderItemsController.create(orderItem)

        res.status(201).send(data)
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default route