const express = require('express')
const MongoDB = require('mongoose')
const bcrypt = require('bcryptjs')
const app = express()

app.get('/', function(req, res) {
    res.end('hello world')
})

// CONECTAR AO BANCO MONGODB


app.listen(9000, () => {
    console.log('Servidor online na porta: 9000')
})