const express = require("express");
const router = express.Router();
const Favoritos = require("../models/Favoritos");

// GET - listar favoritos
router.get("/", async (req, res) => {
  const favoritos = await Favoritos.find();
  res.json(favoritos);
});

// POST - crear favorito
router.post("/", async (req, res) => {
  const nuevoFavorito = new Favoritos(req.body);
  const favoritoGuardado = await nuevoFavorito.save();
  res.json(favoritoGuardado);
});

// PUT - actualizar favorito
router.put("/:id", async (req, res) => {
  const actualizado = await Favoritos.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(actualizado);
});

// DELETE - eliminar favorito
router.delete("/:id", async (req, res) => {
  await Favoritos.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Favorito eliminado correctamente" });
});

module.exports = router;
