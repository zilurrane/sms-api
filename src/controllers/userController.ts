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

export const createNewUser =
  (req: Request, res: Response) => {
    const newUser = new User(req.body)
    newUser.save((err, user) => {
      if (err) {
        res.status(500).send(err)
      }
      res.status(201).json(user)
    })
  }

export const readUser =
  (req: Request, res: Response) => {
    User.findById(req.params.userid, (err, user) => {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).json(user)
    })
  }

export const updateUser =
  (req: Request, res: Response) => {
    User.findOneAndUpdate(
      { _id: req.params.userid }, req.body, { new: true }, (err, user) => {
        if (err) {
          res.status(500).send(err)
        }
        res.status(200).json(user)
      })
  }

export const deleteUser = (req: Request, res: Response) => {
  User.remove({ _id: req.params.userid }, (err) => {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).json({ message: 'User successfully deleted' })
  })
}
