const express = require("express");
const router = express.Router();
const Usuarios = require("../models/Usuarios");

// GET - listar usuarios
router.get("/", async (req, res) => {
  const usuarios = await Usuarios.find();
  res.json(usuarios);
});

// POST - crear usuario
router.post("/", async (req, res) => {
  const nuevoUsuario = new Usuarios(req.body);
  const usuarioGuardado = await nuevoUsuario.save();
  res.json(usuarioGuardado);
});

// PUT - actualizar usuario por id
router.put("/:id", async (req, res) => {
  const usuarioActualizado = await Usuarios.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(usuarioActualizado);
});

// DELETE - eliminar usuario por id
router.delete("/:id", async (req, res) => {
  await Usuarios.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Usuario eliminado correctamente" });
});

module.exports = router;
