import { Payment, PaymentsRepository } from "../repositories/PaymentsRepository";


export class PaymentsController {
    constructor(
        private paymentsRepository: PaymentsRepository
    ) {

    }

    create(payment: Payment): Promise<void> {
        return this.paymentsRepository.create(payment)
    }
}