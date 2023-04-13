import { Router } from 'express'
import CostumersRoutes from './CostumersRouter'
import OrderItemsRoutes from './OrderItemsRouter'
import OrdersRoutes from './OrdersRouter'
import ProductsRoutes from './ProductsRouter'
import ShippingsRoutes from './ShippingsRouter'
import PaymentsRoutes from './PaymentsRouter'

import { version } from '../../package.json';

const route = Router()

route.get('/', (req, res) => {
    res.status(200).json({
        name: 'E-commerce API',
        version
    })
})

export default [
    route,
    CostumersRoutes,
    OrderItemsRoutes,
    OrdersRoutes,
    ProductsRoutes,
    ShippingsRoutes,
    PaymentsRoutes,
]