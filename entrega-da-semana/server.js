const express = require("express");
const app = express();
const porta = 3000;
const mulheresTech = require("./mulheres-ti.json");

//@route GET mulheres Tech
//@desc Retorna todas as mulheres Tech
//@acces Public
app.get("/mulheres-ti", (req, res) => {
  res.status(200).send(mulheresTech);
});

//bônus buscar apenas um ID
app.get("/mulheres-ti/:id", (req, res) => {
  const id = req.params.id;
  const mulher = mulheresTech.filter((M) => M.id == id);
  if (mulher.length == 1) {
    res.status(200).send(mulher);
  } else {
    res.status(404).send("Not Found");
  }
});

//usar o express para ler o json
app.use(express.json());

//criar um servidor
app.listen(porta, function () {
  console.log("Servidor rodando!!");
});
