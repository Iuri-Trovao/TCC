const express = require('express')
const path = require('path')
const bcrypt = require('bcryptjs')
const app = express()

// Configurar o middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'view')));

app.get('/', (req, res) => {
    // Não é necessário renderizar o arquivo HTML, pois o middleware express.static já o serve
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});


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



app.listen(8081, () => {
    console.log('servidor rodando na porta 8081!!!')
})