export interface Costumer {
    id: number
    name: string
    address: string
    email: string
    createdAt: string
    updatedAt: string
}


export interface CostumersRepository {
    create(costumer: Costumer): Promise<void>
}