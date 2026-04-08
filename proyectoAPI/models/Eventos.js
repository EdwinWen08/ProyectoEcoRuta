const mongoose = require("mongoose");

const eventosSchema = new mongoose.Schema(
  {
    Id: { type: String, required: true },
    nombreTitulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha: { type: String, required: true },
    puntoId: { type: String, required: true },
    organizadorId: { type: String, required: true },
    materialesAceptados: [{ type: String, required: true }],
    cupo: { type: Number, required: true },
    ubicacion: { type: String, required: true },
    fechaCreacion: { type: Date, required: true },
    estado: { type: String, required: true }
  },
  { timestamps: false }
);

module.exports = mongoose.model("Eventos", eventosSchema);