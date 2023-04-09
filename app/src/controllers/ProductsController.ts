import { Product, ProductsRepository } from "../repositories/ProductsRepository";


export class ProductsController {
    constructor(
        private productsRepository: ProductsRepository
    ) {

    }

    create(product: Product): Promise<void> {
        return this.productsRepository.create(product)
    }
}