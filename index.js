const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configurar o motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar o diretório público para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.render('index'); // Renderiza o arquivo index.ejs
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro'); // Renderiza o arquivo cadastro.ejs
});

app.get('/login', (req, res) => {
    res.render('login'); // Renderiza o arquivo cadastro.ejs
});

app.get('/suporte', (req, res) => {
    res.render('suporte'); // Renderiza o arquivo cadastro.ejs
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
