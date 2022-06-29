import mongoose from 'mongoose'
import users from '../data/users.js'

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    title: { type: String, required: true },
  },
  {
    collection: 'users',
  }
)

const UserModal = mongoose.model('User', userSchema)

const usersData = new UserModal({
  name: 'users',
})

usersData.insertMany(users, (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data)
})

export default UserModal
