const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const conectarBD = require("./src/db/database");
const equiposRoutes = require("./src/routes/equipos.routes");

const app = express();
const PORT = 4001;

conectarBD();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Servicio Equipos funcionando correctamente");
});

app.use("/api", equiposRoutes);

app.listen(PORT, () => {
  console.log(`Servicio Equipos corriendo en http://localhost:${PORT}`);
});
