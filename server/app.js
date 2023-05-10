const express = require('express')
const app = express()
const db = require('../db/db')

app.get('./view/index.html', (req,res)=>{
    res.send("hello world")
})

app.listen(8081, function(){
    console.log('server on')
})