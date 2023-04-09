export interface Product {
    id: number
    name: string
    description: string
    price: number
    stock: number
    order: number
    category: string
    createdAt: string
    updatedAt: string
}

export interface ProductsRepository {
    create(costumer: Product): Promise<void>
}