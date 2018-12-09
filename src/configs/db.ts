import '../models/user'

import { connect } from 'mongoose'

const dbURI = process.env.MONGO_CON_STRING || ''

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useNewUrlParser: true,
  useCreateIndex: true
}

connect(dbURI, options)
  .then(
    () => { console.log('Database connection established!') },
    (err) => {
      console.log(
        'Error connecting Database instance due to: ',
        err)
    })
