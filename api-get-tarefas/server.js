/* 
Criar um projeto do Z-E-R-O chamado:

PROJETO: TAREFAS 

1. Instalar o express
2. Instalar  o nodemon
3. inserir no package.json o  > start: nodemon server.json
4. Criar um arquivo json com as TAREFAS
5. Criar um servidor
6. Criar uma API GET com response do Json com as tarefas. 
7. Inserir na API GET o status que a response chegou no Client
8. Testar no Insominia / Postman
9. Documentar

ARQUIVO JSON: TAREFAS
https://jsonplaceholder.typicode.com/todos 
*/

const express = require("express");
const app = express();
const porta = 3000;
const tarefas = require("./tarefas.json");

//@route GET tarefas
//@desc Retorna todas as tarefas
//@acces Public
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

//usar o express para ler o json
app.use(express.json());

//criar um servidor
app.listen(porta, function () {
  console.log("Servidor rodando!!");
});
