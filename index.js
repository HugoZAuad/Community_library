import express from "express";
const app = express();

app.use(express.json());

const users = [];

//METHOD - GET, POST, PUT/PATCH, DELETE

//EXPLICAÇÃO DOS METODOS HTTP
//METHOD - GET - PARA LISTAR
//METHOD - POST - PARA CRIAR
//METHOD - PUT/PATCH - PARA ATUALIZAR
//METHOD - DELTE - PARA DELETAR

//NAME - / - SEMPRE NO PLURAL

//CALLBACK FUNCTION - (req, res) => ONDE EXCECUTAMOS O BACKEND (LOGICA, REGRAS DE NEGOCIO)

app.post("/users", (req, res) => {
  const body = req.body;
  users.push(body);
  res.status(201).send("User created successfully");
});

app.get("/users", (req, res) => {
    res.json({users});
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
