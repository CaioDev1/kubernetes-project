import { Product } from "@prisma/client";
import { ProductCreationData, ProductsRepository } from "../repositories/ProductsRepository";

export class ProductsController {
    constructor(
        private productsRepository: ProductsRepository
    ) {

    }

    create(product: ProductCreationData): Promise<Product> {
        if(!product) throw new Error('Creation data payload must be included')

        return this.productsRepository.create(product)
    }

    getAll(): Promise<Product[]> {
        return this.productsRepository.getAll()
    }
}