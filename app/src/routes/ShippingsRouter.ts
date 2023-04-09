import { Router } from 'express'
import { PrismaShippingsRepository } from '../repositories/prisma/PrismaShippingsRepository'
import { ShippingsController } from '../controllers/ShippingsController'
import { ShippingCreationData } from '../repositories/ShippingsRepository'

const route = Router()

route.post('/shippings', async (req, res) => {
    const shipping: ShippingCreationData = req.body

    const prismaShippingsRepository = new PrismaShippingsRepository()
    const shippingsController = new ShippingsController(prismaShippingsRepository)

    try {
        const data = await shippingsController.create(shipping)

        res.status(201).send(data)
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default route