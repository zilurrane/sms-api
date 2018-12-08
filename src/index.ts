import bodyParser from 'body-parser'
import express from 'express'
import userRoutes from './routes/userRoutes'
require('./configs/db')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', userRoutes)

app.get('/ping', (_req, res) => { res.send({ message: 'pong' }) })

app.listen(9000, () => console.log('listening on port 9000'))
