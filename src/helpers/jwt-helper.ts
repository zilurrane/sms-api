import { Strategy, ExtractJwt } from 'passport-jwt'
import User from '../models/user'

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

export const jwtStrategy = new Strategy(opts, (jwt_payload: any, done: any) => {
    User.findOne({ email: jwt_payload.email }, (err, user) => {
        if (err) {
            return done(err, false)
        }
        if (user) {
            done(null, user)
        } else {
            done(null, false)
        }
    })
})
