// app.js
const express = require('express');
const app = express();

// ❌ MALA PRÁCTICA: secreto en el código
const GITHUB_TOKEN = "REMOVED"; // pega aquí tu token desechable

app.get('/', (req, res) => res.send('Hola'));
app.listen(3000);
