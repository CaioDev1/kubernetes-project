import { Product } from "@prisma/client"

export interface ProductCreationData {
    id?: number
    name: string
    description: string
    price: number
    stock: number
    category: string
}

export interface ProductsRepository {
    create(costumer: ProductCreationData): Promise<Product>
    getAll(): Promise<Product[]>
}