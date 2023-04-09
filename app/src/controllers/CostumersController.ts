import { Costumer } from "@prisma/client";
import { CostumerCreationData, CostumersRepository } from "../repositories/CostumersRepository";

export class CostumersController {
    constructor(
        private costumersRepository: CostumersRepository
    ) {

    }

    create(costumer: CostumerCreationData): Promise<Costumer> {
        if(!costumer) throw new Error('Creation data payload must be included')
        
        return this.costumersRepository.create(costumer)
    }
}