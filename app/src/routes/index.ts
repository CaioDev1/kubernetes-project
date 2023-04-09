import { Router } from 'express'
import CostumersRoutes from './CostumersRouter'
import OrderItemsRoutes from './OrderItemsRouter'
import OrdersRoutes from './OrdersRouter'
import ProductsRoutes from './ProductsRouter'
import ShippingsRoutes from './ShippingsRouter'
import PaymentsRoutes from './PaymentsRouter'

const route = Router()

route.get('/', (req, res) => {
    res.status(200).json({
        message: 'Response example'
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