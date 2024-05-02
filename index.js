const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const { PORT } = process.env

app.get('/', (req, res) => {
    res.send('Hello World I am from circle ci!')
})

app.get('/google', (req, res) => {
    res.send('abrarshah00@gmail.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req, res) => {
    res.json('<h2>Chai aur code</h2>')
})
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})