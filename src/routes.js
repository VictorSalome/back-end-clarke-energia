import { Router } from 'express'

import SuppliersController from './app/controllers/SupplierController'
const routes = new Router()

routes.post('/suppliers', SuppliersController.store)
routes.get('/suppliers', SuppliersController.index)

export default routes
