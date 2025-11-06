const express = require("express");
const app = express();
const productos = require("./productos");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de Productos funcionando 🚀");
});

app.get("/productos", (req, res) => {
  res.json(productos);
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
