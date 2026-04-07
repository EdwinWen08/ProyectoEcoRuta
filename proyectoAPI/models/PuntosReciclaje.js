const mongoose = require("mongoose");

const puntosReciclajeSchema = new mongoose.Schema(
  {
    Id: { type: String, required: true },
    nombrePunto: { type: String, required: true },
    provincia: { type: String, required: true },
    canton: { type: String, required: true },
    direccion: { type: String, required: true },
    estado: { type: String, required: true },
    telefonoContacto: { type: String, required: true },
    materialesPermitidos: { type: [String], required: true },
    horarioAtencion: { type: String, required: true }, 
  },

  { timestamps: false,
    collection: "puntosReciclaje"
   }
);

module.exports = mongoose.model("PuntosReciclaje", puntosReciclajeSchema);