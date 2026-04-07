const express = require("express");
const router = express.Router();
const Camiones = require("../models/Camiones");

// GET - listar camiones
router.get("/", async (req, res) => {
  const camiones = await Camiones.find();
  res.json(camiones);
});

// POST - crear camión
router.post("/", async (req, res) => {
  const nuevoCamion = new Camiones(req.body);
  const camionGuardado = await nuevoCamion.save();
  res.json(camionGuardado);
});

// PUT - actualizar camión por id
router.put("/:id", async (req, res) => {
  const camionActualizado = await Camiones.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(camionActualizado);
});

// DELETE - eliminar camión por id
router.delete("/:id", async (req, res) => {
  await Camiones.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Camión eliminado correctamente" });
});

module.exports = router;