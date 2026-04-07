const mongoose = require("mongoose");

const rutasSchema = new mongoose.Schema(
  {
    Id: { type: String, required: true },
    nombreRuta: { type: String, required: true },
    puntos: { type: [String], required: true },
    dia: { 
      type: String, 
      enum: ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"], 
      required: true 
    },
    horaSalida: { type: String, required: true },
    estado: { 
      type: String, 
      enum: ["activa","inactiva"], 
      required: true 
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Rutas", rutasSchema);