import { Costumer } from "@prisma/client"

export interface CostumerCreationData {
    id?: number
    name: string
    address: string
    email: string
    password: string
}


export interface CostumersRepository {
    create(costumer: CostumerCreationData): Promise<Costumer>
}