import { Costumer, CostumersRepository } from "../repositories/CostumersRepository";


export class CostumersController {
    constructor(
        private costumersRepository: CostumersRepository
    ) {

    }

    create(costumer: Costumer): Promise<void> {
        return this.costumersRepository.create(costumer)
    }
}