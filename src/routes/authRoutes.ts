import { Router } from 'express'
import { login } from '../controllers/authController'

const routes = Router()

routes.post('/login', login)

export default routes
