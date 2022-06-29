import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import connectDB from './config/db.js'
import bodyParser from 'body-parser'

const app = express()

dotenv.config()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

connectDB()

// test
app.get('/', (req, res) => {
  res.send('API is working...')
})

app.get('/api/users', (req, res) => {
  res.json(users)
  if (!users) {
    res.status(404).json({ msg: 'No users found' })
  }
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running on port http://localhost:${PORT} successfully`.yellow.bold
  )
)
