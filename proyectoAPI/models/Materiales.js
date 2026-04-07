const mongoose = require("mongoose");

const materialesSchema = new mongoose.Schema(
  {
    Id: { type: String, required: true, unique: true },
    nombreMaterial: { type: String, required: true },
    categoria: { type: String, required: true },
    descripcion: { type: String, required: true },
    restricciones: [{ type: String }]
  },
  { timestamps: false }
);

module.exports = mongoose.model("Materiales", materialesSchema);
