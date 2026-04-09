const express = require("express");
const router = express.Router();
const Configuraciones = require("../models/Configuraciones");

// GET por id
router.get("/:id", async (req, res) => {
  const data = await Configuraciones.findById(req.params.id);
  res.json(data);
});

// GET
router.get("/", async (req, res) => {
  const data = await Configuraciones.find();
  res.json(data);
});

// POST
router.post("/", async (req, res) => {
  const nueva = new Configuraciones(req.body);
  const guardada = await nueva.save();
  res.json(guardada);
});

// PUT
router.put("/:id", async (req, res) => {
  const actualizada = await Configuraciones.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(actualizada);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Configuraciones.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Configuración eliminada correctamente" });
});

module.exports = router;
