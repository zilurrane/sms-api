import { Router } from 'express'

const routes = Router()

routes.get('/', (_req, res) => { res.send({ message: 'pong' }) })

export default routes
