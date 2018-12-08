import { Router } from 'express'
import { createNewUser, listAllUsers } from '../controllers/userController'

const routes = Router()

routes.get('/getAll', listAllUsers).post('/create', createNewUser)

export default routes
