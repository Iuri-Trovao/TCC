const express = require('express');
const path = require('path');
const bcrypt = require('bcryptjs');
const app = express();

// Middleware para processar o corpo da solicitação
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'view', 'FormAdmin.html'));
});

// Rota para renderizar o arquivo CSS específico
app.get('/src/style/FormAdm.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'style', 'FormAdm.css'));
});

// Criação dos usuários administradores
const adminUsers = [
    {username: 'iuri', password: '1234'},
    { username: 'admin1', password: 'password1' },
    { username: 'admin2', password: 'password2' },
    { username: 'admin3', password: 'password3' },
    { username: 'admin4', password: 'password4' },
    { username: 'admin5', password: 'password5' }
];

// Criptografar as senhas dos usuários
const saltRounds = 10;
Promise.all(adminUsers.map(user => bcrypt.hash(user.password, saltRounds)))
    .then(hashedPasswords => {
        hashedPasswords.forEach((hashedPassword, index) => {
            adminUsers[index].password = hashedPassword;
        });
    })
    .catch(err => {
        console.error('Erro ao criptografar senhas:', err);
    });

// Endpoint para lidar com o envio do formulário
app.use(express.static(path.join(__dirname, 'view')))
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verifique se o usuário existe nos usuários administradores
    const user = adminUsers.find(u => u.username === username);

    if (user) {
        // Compare a senha fornecida com a senha criptografada no backend
        bcrypt.compare(password, user.password)
            .then(result => {
                if (result) {
                    res.sendFile(path.join(__dirname, 'view', 'index.html'))
                    app.get('/src/style/style.css', function(req, res) {
                        res.sendFile(path.join(__dirname, 'style', 'style.css'));
                    });
                    app.get('/src/style/darkmode.css', function(req, res) {
                        res.sendFile(path.join(__dirname, 'style', 'darkmode.css'));
                    });
                    app.get('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css', function(req, res) {
                        res.sendFile(path.join(__dirname));
                    });
                    app.get('/src/style/botao-hambu.css', function(req, res) {
                        res.sendFile(path.join(__dirname, 'style', 'botao-hambu.css'));
                    });
                    app.get('/src/style/barra-de-pesquisa.css', function(req, res) {
                        res.sendFile(path.join(__dirname, 'style', 'barra-de-pesquisa.css'));
                    });
                    app.use('/src/img', express.static(path.join(__dirname, 'img')))
                    
                    app.use(express.static(path.join(__dirname, 'javascript', 'darkmode.js')))
                    
                } else {
                    res.send('Senha incorreta!');
                }
            })
            .catch(err => {
                console.error('Erro ao comparar senhas:', err);
                res.status(500).send('Erro interno no servidor');
            });
    } else {
        res.send('Usuário não encontrado!');
    }
});

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081!!!');
});