const express = require("express");
const router = express.Router();
const Eventos = require("../models/Eventos");

// GET - listar eventos
router.get("/", async (req, res) => {
  const eventos = await Eventos.find();
  res.json(eventos);
});

// POST - crear evento
router.post("/", async (req, res) => {
  const nuevoEvento = new Eventos(req.body);
  const eventoGuardado = await nuevoEvento.save();
  res.json(eventoGuardado);
});

// PUT - actualizar evento por id
router.put("/:id", async (req, res) => {
  const eventoActualizado = await Eventos.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(eventoActualizado);
});

// DELETE - eliminar evento por id
router.delete("/:id", async (req, res) => {
  await Eventos.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Evento eliminado correctamente" });
});

module.exports = router;