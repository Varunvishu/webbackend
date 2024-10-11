require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('varundotcom')
})

app.get('/login',(req,res)=>{
    res.send(`<h1>please lgoin at chai dot com </h1>`)
})

app.get('/signin',(req,res)=>{
    res.send(`<h1>please sigin at chai dot com </h1>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
