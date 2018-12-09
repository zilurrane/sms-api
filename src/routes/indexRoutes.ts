import { Router } from 'express'
import pingRoutes from './pingRoutes'
import userRoutes from './userRoutes'

const routes = Router()

routes.use('/ping', pingRoutes)
routes.use('/user', userRoutes)

export default routes
