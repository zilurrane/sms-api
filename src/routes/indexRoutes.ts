import { Router } from 'express'
import passport from 'passport'
import { jwtStrategy } from '../helpers/jwt-helper'
import pingRoutes from './pingRoutes'
import userRoutes from './userRoutes'
import authRoutes from './authRoutes'

const routes = Router()

passport.use(jwtStrategy);

routes.get("/protected", passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).send("YAY! this is a protected Route")
})

routes.use('/ping', pingRoutes)
routes.use('/user', userRoutes)
routes.use('/auth', authRoutes)

export default routes
