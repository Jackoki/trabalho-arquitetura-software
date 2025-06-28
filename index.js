const express = require('express');
const paisRoutes = require('./src/routes/paisRoutes');
const lugarRoutes = require('./src/routes/lugarRoutes');

const app = express();
const port = 3000;

// Middleware para JSON
app.use(express.json());

// Rotas
app.use(paisRoutes);
app.use(lugarRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
