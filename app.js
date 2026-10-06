// app.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

app.get('/', (req, res) => res.send('Hola'));

app.listen(3000);
