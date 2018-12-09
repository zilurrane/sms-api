import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/user'

export const login = (req: Request, res: Response) => {
  let { email, password } = req.body
  if (email && password) {
    User.findOne({
      email: email
    }, function (err, user: any) {
      if (err) {
        throw err;
      }
      if (!user) {
        res.status(400).json({ message: 'user not found.' });
      } else {
        user.comparePassword(password, function (err: any, isMatch: any) {
          if (isMatch && !err) {
            const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
              expiresIn: 120 //2 mins
            })
            res.status(200).json({
              message: 'Auth Passed.',
              data: user,
              token
            })
          } else {
            return res.status(401).json({ message: 'Email ID or Password is incorrect.' })
          }
        })
      }
    })
  }
  else {
    res.status(400).send({ message: 'Please enter an email or password.' })
  }
}

export const createNewUser = (req: Request, res: Response) => {
  if (req.body.email && req.body.password) {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    newUser.save((err, user) => {
      if (err) {
        console.log(err)
        res.status(500).send(err)
      } else {
        res.status(201).json({ message: 'Succesfully created new user.', data: user })
      }
    })
  } else {
    res.status(400).send({ message: 'Please enter an email or password to create user' })
  }
}
