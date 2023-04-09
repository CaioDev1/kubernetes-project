import { Router } from 'express'
import { PaymentsController } from '../controllers/PaymentsController'
import { PrismaPaymentsRepository } from '../repositories/prisma/PrismaPaymentsRepository'

const route = Router()

route.post('/payments', async (req, res) => {
    const payment = req.body

    const prismaPaymentsRepository = new PrismaPaymentsRepository()
    const paymentsRepository = new PaymentsController(prismaPaymentsRepository)

    try {
        await paymentsRepository.create(payment)

        res.status(201).send()
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

export default route