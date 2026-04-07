const mongoose = require("mongoose");

const usuariosSchema = new mongoose.Schema(
  {
    Id: { type: String, required: true,},
    nombreUsuario: { type: String, required: true,},
    correo: { type: String, required: true,},
    telefono: { type: String, required: true,},
    contrasena: { type: String, required: true,},
    rolId: { type: String, required: true,},
    estado: { type: String, required: true },
    fechaRegistro: { type: Date, required: true },
  },
  { timestamps: false,}
);

module.exports = mongoose.model("Usuarios", usuariosSchema);
