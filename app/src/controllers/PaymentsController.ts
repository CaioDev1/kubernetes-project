import { Payment } from "@prisma/client";
import { PaymentCreationData, PaymentsRepository } from "../repositories/PaymentsRepository";

export class PaymentsController {
    constructor(
        private paymentsRepository: PaymentsRepository
    ) {

    }

    create(payment: PaymentCreationData): Promise<Payment> {
        if(!payment) throw new Error('Creation data payload must be included')

        return this.paymentsRepository.create(payment)
    }
}