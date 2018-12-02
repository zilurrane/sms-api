import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/ping', async (_req, res) => {
  res.send({
    message: 'pong'
  })
})

app.listen(9000, () => console.log('listening on port 9000'))
