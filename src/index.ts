import bodyParser from 'body-parser'
import express from 'express'
import routes from './routes/indexRoutes'
require('./configs/db')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', routes)

app.listen(9000, () => console.log('listening on port 9000'))
