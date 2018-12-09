import { Request, Response } from 'express'

import User from '../models/user'

export const listAllUsers =
  (_req: Request, res: Response) => {
    User.find({}, (err, user) => {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).json(user)
    })
  }
