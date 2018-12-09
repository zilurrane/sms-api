import { Router } from 'express'
import { listAllUsers } from '../controllers/userController'

const routes = Router()

routes.get('/getall', listAllUsers)

export default routes
