import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const login = (req: Request, res: Response) => {
  let { username, password } = req.body;
  //This lookup would normally be done using a database, the password compare would normally be done using bcrypt.
  const isUserAuthenticated: boolean = (username === "admin") && (password === "password")

  if (isUserAuthenticated) {
    const opts = {
      expiresIn: 120 //token expires in 2min
    }
    const secret = process.env.JWT_SECRET
    const token = jwt.sign({ username }, secret, opts)
    return res.status(200).json({
      message: "Auth Passed",
      token
    })
  }
  return res.status(401).json({ message: "Auth Failed" })
}
