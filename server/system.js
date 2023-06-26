const express = require('express')
const moongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('..db/user.js')

// Conectar ao banco de dados MongoDB
mongoose.connect(User, {
    useNewUrlParse: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conectado ao MongoDB')
})

// Criação dos usuarios administradores
const adminUsers = [
    { username: 'admin1', password: 'password1' },
    { username: 'admin2', password: 'password2' },
    { username: 'admin3', password: 'password3' },
    { username: 'admin4', password: 'password4' },
    { username: 'admin5', password: 'password5' }
]

// Criptografar as senhas dos usuários
const saltRounds = 10
Promise.all(adminUsers.map(user => bcrypt.hash(user.password, saltRounds)))
    .then(hashedPassword => {
        adminUsers.forEach((user, index) => {
            user.password = hashedPassword[index]
        })
    })



app.listen(10000, () => {
    console.log('servidor rodando na porta 10000!!!')
})