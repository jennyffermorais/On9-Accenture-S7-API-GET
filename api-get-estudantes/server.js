const express = require("express");
const app = express();
const porta = 3000;
const estudantes = require("./estudantes.json");

app.use(express.json());

app.get("/estudantes", function (request, response) {
  response.json(estudantes);
});

app.listen(porta, function () {
  console.log("Servidor rodando");
});

