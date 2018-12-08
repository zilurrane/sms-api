import { model, Schema } from 'mongoose'

const userSchema = new Schema({ username: String, password: String })

const userModel = model('User', userSchema)

export default userModel
