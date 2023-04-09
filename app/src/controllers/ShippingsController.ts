import { Shipping } from "@prisma/client";
import { ShippingCreationData, ShippingsRepository } from "../repositories/ShippingsRepository";

export class ShippingsController {
    constructor(
        private shippingsRepository: ShippingsRepository
    ) {

    }

    create(shipping: ShippingCreationData): Promise<Shipping> {
        if(!shipping) throw new Error('Creation data payload must be included')

        return this.shippingsRepository.create(shipping)    
    }
}