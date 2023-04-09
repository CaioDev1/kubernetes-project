import { Router } from 'express'
import { PrismaShippingsRepository } from '../repositories/prisma/PrismaShippingsRepository'
import { ShippingsController } from '../controllers/ShippingsController'

const route = Router()

route.post('/shippings', async (req, res) => {
    const shipping = req.body

    const prismaShippingsRepository = new PrismaShippingsRepository()
    const shippingsRepository = new ShippingsController(prismaShippingsRepository)

    try {
        await shippingsRepository.create(shipping)

        res.status(201).send()
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default route