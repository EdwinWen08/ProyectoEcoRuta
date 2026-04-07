const express = require("express");
const router = express.Router();
const Materiales = require("../models/Materiales");

// GET - listar materiales
router.get("/", async (req, res) => {
  const materiales = await Materiales.find();
  res.json(materiales);
});

// POST - crear material
router.post("/", async (req, res) => {
  const nuevoMaterial = new Materiales(req.body);
  const materialGuardado = await nuevoMaterial.save();
  res.json(materialGuardado);
});

// PUT - actualizar material por id
router.put("/:id", async (req, res) => {
  const materialActualizado = await Materiales.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(materialActualizado);
});

// DELETE - eliminar material por id
router.delete("/:id", async (req, res) => {
  await Materiales.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Material eliminado correctamente" });
});

module.exports = router;
