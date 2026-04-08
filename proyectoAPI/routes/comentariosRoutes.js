const express = require("express");
const router = express.Router();
const Comentarios = require("../models/Comentarios");

// GET - listar comentarios
router.get("/", async (req, res) => {
  const comentarios = await Comentarios.find();
  res.json(comentarios);
});

// POST - crear comentario
router.post("/", async (req, res) => {
  const nuevoComentario = new Comentarios(req.body);
  const comentarioGuardado = await nuevoComentario.save();
  res.json(comentarioGuardado);
});

// PUT - actualizar comentario por id
router.put("/:id", async (req, res) => {
  const comentarioActualizado = await Comentarios.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(comentarioActualizado);
});

// DELETE - eliminar comentario por id
router.delete("/:id", async (req, res) => {
  await Comentarios.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Comentario eliminado correctamente" });
});

module.exports = router;