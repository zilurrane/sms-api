import { Router } from 'express'
import { createNewUser, listAllUsers } from '../controllers/userController'

const routes = Router()

routes.get('/getall', listAllUsers).post('/create', createNewUser)

export default routes
