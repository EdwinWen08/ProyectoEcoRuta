const mongoose = require("mongoose");

const rolesSchema = new mongoose.Schema(
  {
    Id: { type: String, required: true,},
    nombreRol: { type: String, required: true,},
    descripcion: { type: String, required: true },
    estado: { type: String, required: true },
    fechaRegistro: { type: Date, required: true },
  },
  { timestamps: false,}
);

module.exports = mongoose.model("Roles", rolesSchema);
