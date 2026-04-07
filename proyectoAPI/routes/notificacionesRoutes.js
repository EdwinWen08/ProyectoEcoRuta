const express = require("express");
const router = express.Router();
const Notificaciones = require("../models/Notificaciones");

// GET
router.get("/", async (req, res) => {
  const data = await Notificaciones.find();
  res.json(data);
});

// POST
router.post("/", async (req, res) => {
  const nueva = new Notificaciones(req.body);
  const guardada = await nueva.save();
  res.json(guardada);
});

// PUT
router.put("/:id", async (req, res) => {
  const actualizada = await Notificaciones.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(actualizada);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Notificaciones.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Notificación eliminada correctamente" });
});

module.exports = router;
