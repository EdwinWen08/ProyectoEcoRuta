const express = require("express");
const router = express.Router();
const PuntosReciclaje = require("../models/PuntosReciclaje");

// GET - listar puntos
router.get("/", async (req, res) => {
  const puntos = await PuntosReciclaje.find();
  res.json(puntos);
});

// POST - crear punto
router.post("/", async (req, res) => {
  const nuevoPunto = new PuntosReciclaje(req.body);
  const puntoGuardado = await nuevoPunto.save();
  res.json(puntoGuardado);
});

// PUT - actualizar punto por id
router.put("/:id", async (req, res) => {
  const puntoActualizado = await PuntosReciclaje.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(puntoActualizado);
});

// DELETE - eliminar punto por id
router.delete("/:id", async (req, res) => {
  await PuntosReciclaje.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Punto eliminado correctamente" });
});

module.exports = router;