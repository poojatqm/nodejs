const express = require('express')
const app = express();

require('dotenv').config()

// const postsRouter = require('./routes/posts.router')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Middleware authentication start**********
const auth = require('./middleware/posts.middleware')
app.use('/login',
    auth,
    (req, res) => {
        res.status(200).send("Welcome! you are logged in successfully")
    })
// Middleware authentication end**********

// app.use('/', postsRouter)

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
    console.log("Server running...")
})