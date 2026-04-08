const mongoose = require("mongoose");

const comentariosSchema = new mongoose.Schema(
  {
    Id: { type: String, required: true },
    usuarioId: { type: String, required: true },
    tipo: { type: String, required: true },
    referenciaId: { type: String, required: true },
    texto: { type: String, required: true },
    calificacion: { type: Number, required: true },
    fechaCreacion: { type: Date, required: true }
  },
  { timestamps: false }
);

module.exports = mongoose.model("Comentarios", comentariosSchema);