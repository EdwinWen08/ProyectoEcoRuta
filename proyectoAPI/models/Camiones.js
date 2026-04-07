const mongoose = require("mongoose");

const camionesSchema = new mongoose.Schema(
  {
    Id: { type: String, required: true },
    placa: { type: String, required: true },
    marca: { type: String, required: true },
    anio: { type: Number, required: true },
    rutaId: { type: String, required: true },
    conductorId: { type: String, required: true },
    estado: 
    { type: String,
      enum: ["activo", "inactivo", "en mantenimiento"], 
      required: true },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Camiones", camionesSchema);