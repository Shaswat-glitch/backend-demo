require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running ${port}`)
})