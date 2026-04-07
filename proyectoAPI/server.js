require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo DB Conectado"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;

//Routes CRUD
app.use("/api/roles", require("./routes/RolesRoutes"));
app.use("/api/usuarios", require("./routes/UsuariosRoutes"));
app.use("/api/materiales", require("./routes/MaterialesRoutes"));
app.use("/api/configuraciones", require("./routes/configuracionesRoutes"));
app.use("/api/notificaciones", require("./routes/notificacionesRoutes"));
app.use("/api/favoritos", require("./routes/favoritosRoutes"));
app.use("/api/puntosReciclaje", require("./routes/puntosReciclajeRoutes"));
app.use("/api/rutas", require("./routes/rutasRoutes"));
app.use("/api/camiones", require("./routes/camionesRoutes"));
app.listen(PORT, () => {
  console.log(`Servidor ejecutadonse ${PORT}`);
});
