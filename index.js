// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Não inicialize o servidor aqui, apenas exporte o app
const startServer = () => {
  return app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
  });
};

module.exports = { app, startServer };
