const express = require('express')

const app = express()

const userRouter = require('./routes/users')

app.use(express.json())
app.use(userRouter)

app.listen('3000', () => {
    console.log('App is  listening on ', 3000)
})