const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'view', 'FormAdmin.html'));
    
});
// Rota para renderizar o arquivo CSS específico
app.get('/src/style/FormAdm.css', function(req, res){
    res.sendFile(path.join(__dirname, 'style', 'FormAdm.css'));
})
  




// Criação dos usuários administradores
const adminUsers = [
    { username: 'admin1', password: 'password1' },
    { username: 'admin2', password: 'password2' },
    { username: 'admin3', password: 'password3' },
    { username: 'admin4', password: 'password4' },
    { username: 'admin5', password: 'password5' }
];

// Criptografar as senhas dos usuários
const saltRounds = 10;
Promise.all(adminUsers.map(user => bcrypt.hash(user.password, saltRounds)))
    .then(hashedPassword => {
        adminUsers.forEach((user, index) => {
            user.password = hashedPassword[index];
        });
    })
    .catch(err => {
        console.error('Erro ao criptografar senhas:', err);
    });

// Endpoint para lidar com o envio do formulário
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verifique se o usuário existe nos usuários administradores
    const user = adminUsers.find(u => u.username === username);

    if (user) {
        // Compare a senha fornecida com a senha criptografada no backend
        bcrypt.compare(password, user.password)
            .then(result => {
                if (result) {
                    res.send('Login bem-sucedido!');
                } else {
                    res.send('Senha incorreta!');
                }
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Erro interno no servidor');
            });
    } else {
        res.send('Usuário não encontrado!');
    }
});

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081!!!');
});