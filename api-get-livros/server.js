const express = require("express");
const app = express();
const porta = 3000;
const livros = require("./livros.json");

//@route GET livros
//@desc Retorna todos os livros
//@acces Public
app.get("/livros", (req, res) => {
  res.json(livros);
});

//usar o express para ler o json
app.use(express.json());

//criar um servidor
app.listen(porta, function () {
  console.log("Servidor rodando!!");
});
