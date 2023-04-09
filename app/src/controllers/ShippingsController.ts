import { Shipping, ShippingsRepository } from "../repositories/ShippingsRepository";


export class ShippingsController {
    constructor(
        private shippingsRepository: ShippingsRepository
    ) {

    }

    create(shipping: Shipping): Promise<void> {
        return this.shippingsRepository.create(shipping)    
    }
}