const express = require("express");
const router = express.Router();
const Reportes = require("../models/Reportes");

// GET - listar reportes
router.get("/", async (req, res) => {
  const reportes = await Reportes.find();
  res.json(reportes);
});

// POST - crear reporte
router.post("/", async (req, res) => {
  const nuevoReporte = new Reportes(req.body);
  const reporteGuardado = await nuevoReporte.save();
  res.json(reporteGuardado);
});

// PUT - actualizar reporte por id
router.put("/:id", async (req, res) => {
  const reporteActualizado = await Reportes.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(reporteActualizado);
});

// DELETE - eliminar reporte por id
router.delete("/:id", async (req, res) => {
  await Reportes.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Reporte eliminado correctamente" });
});

module.exports = router;