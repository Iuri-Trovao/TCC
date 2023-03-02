const express = require('express')
const app = express()
const db = require("..db/")

app.get('/', (req,res)=>{
    res.send("hello world")
})

app.listen(8081, function(){
    console.log('server on')
})