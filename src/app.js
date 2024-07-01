
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const livroRoutes = require('./routes/livro.routes');
require('dotenv').config();
const cors = require('cors');
app.use(cors());




app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(livroRoutes);

module.exports = app;
