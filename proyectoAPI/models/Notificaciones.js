const mongoose = require("mongoose");

const notificacionesSchema = new mongoose.Schema(
  {
    Id: { type: String, required: true },
    usuarioId: { type: String, required: true },
    tipo: { type: String, required: true },
    Titulo: { type: String, required: true },
    Mensaje: { type: String, required: true },
    referenciaId: { type: String, required: true },
    fechaCreacion: { type: Date, required: true },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Notificaciones", notificacionesSchema);
