const express = require("express");
const router = express.Router();
const Rutas = require("../models/Rutas");

// GET por id
router.get("/:id", async (req, res) => {
  const data = await Rutas.findById(req.params.id);
  res.json(data);
});

// GET - listar rutas
router.get("/", async (req, res) => {
  const rutas = await Rutas.find();
  res.json(rutas);
});

// POST - crear ruta
router.post("/", async (req, res) => {
  const nuevaRuta = new Rutas(req.body);
  const rutaGuardada = await nuevaRuta.save();
  res.json(rutaGuardada);
});

// PUT - actualizar ruta por id
router.put("/:id", async (req, res) => {
  const rutaActualizada = await Rutas.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(rutaActualizada);
});

// DELETE - eliminar ruta por id
router.delete("/:id", async (req, res) => {
  await Rutas.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Ruta eliminada correctamente" });
});

module.exports = router;