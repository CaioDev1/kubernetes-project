import { Router } from 'express'
import { PaymentsController } from '../controllers/PaymentsController'
import { PrismaPaymentsRepository } from '../repositories/prisma/PrismaPaymentsRepository'
import { PaymentCreationData } from '../repositories/PaymentsRepository'

const route = Router()

route.post('/payments', async (req, res) => {
    const payment: PaymentCreationData = req.body

    const prismaPaymentsRepository = new PrismaPaymentsRepository()
    const paymentsController = new PaymentsController(prismaPaymentsRepository)

    try {
        const data = await paymentsController.create(payment)

        res.status(201).send(data)
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default route