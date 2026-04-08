const mongoose = require("mongoose");

const reportesSchema = new mongoose.Schema(
  {
    Id: { type: String, required: true },
    usuarioId: { type: String, required: true },
    puntoId: { type: String, required: true },
    descripcion: { type: String, required: true },
    fechaCreacion: { type: Date, required: true }
  },
  { timestamps: false }
);

module.exports = mongoose.model("Reportes", reportesSchema);