import { Strategy, ExtractJwt } from 'passport-jwt'

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

export const jwtStrategy = new Strategy(opts, (jwt_payload: any, done: any) => {
    if (jwt_payload.email === "email") {
        return done(null, true)
    }
    return done(null, false)
})
