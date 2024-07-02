const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const livroRoutes = require('./routes/livro.routes');
require('dotenv').config();
const cors = require('cors');

app.use(cors()); // Configuração do CORS para permitir requisições de origens diferentes
app.use(express.json()); // Middleware para lidar com requisições JSON
app.use(bodyParser.json()); // Middleware para analisar o corpo das requisições JSON
app.use(bodyParser.urlencoded({ extended: true })); // Middleware para analisar o corpo das requisições com formulários
app.use(livroRoutes); // Middleware para utilizar as rotas definidas em livro.routes.js

// A linha a seguir não faz sentido dentro do contexto de um aplicativo Express
// Pois Object.assign é usado para criar um novo objeto copiando as propriedades de outro objeto,
// e não deve ser usado como middleware no Express desta maneira.
// const extendedObject = Object.assign({}, originalObject);
// app.use(extendedObject);

module.exports = app;
