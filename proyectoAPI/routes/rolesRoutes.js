const express = require("express");
const router = express.Router();
const Roles = require("../models/Roles");

// GET - listar roles
router.get("/", async (req, res) => {
  const roles = await Roles.find();
  res.json(roles);
});

// POST - crear rol
router.post("/", async (req, res) => {
  const nuevoRol = new Roles(req.body);
  const rolGuardado = await nuevoRol.save();
  res.json(rolGuardado);
});

// PUT - actualizar rol por id
router.put("/:id", async (req, res) => {
  const rolActualizado = await Roles.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(rolActualizado);
});

// DELETE - eliminar rol por id
router.delete("/:id", async (req, res) => {
  await Roles.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Rol eliminado correctamente" });
});

module.exports = router;
