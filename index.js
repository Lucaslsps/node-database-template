// Importação dos packages necessários
const express = require("express");
const routes = require("./routes/routes.js");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require('dotenv').config()

// Porta definida como 3000 ou a porta padrão do servidor
const PORT = process.env.PORT || 3000;

//app.use(express.json);
app.use(cors());

// Requisições direcionadas ao arquivo route.js
app.use("/", routes);

// Servidor inicializado
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});