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

app.post("/productos", (req, res) => {
  const nuevo = req.body;
  nuevo.id = productos.length + 1;
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

app.put("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ mensaje: "Producto no encontrado" });

  productos[index] = { ...productos[index], ...req.body };
  res.json(productos[index]);
});

app.delete("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ mensaje: "Producto no encontrado" });

  productos.splice(index, 1);
  res.json({ mensaje: "Producto eliminado" });
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
