import { Router } from 'express'
import { login, createNewUser } from '../controllers/authController'

const routes = Router()

routes.post('/login', login).post('/signup', createNewUser)

export default routes
