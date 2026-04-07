const mongoose = require("mongoose");

const configuracionesSchema = new mongoose.Schema(
  {
    Id: { type: String, required: true },
    clave: { type: String, required: true },
    valor: { type: String, required: true },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Configuraciones", configuracionesSchema);