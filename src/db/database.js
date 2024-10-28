const mongoose = require("mongoose");

const URI =
  "mongodb+srv://demianchz49:demianolpi49@cluster0.h3hgq.mongodb.net/tu_base_de_datos?retryWrites=true&w=majority&appName=Cluster0";

const conectarBD = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error en la conexión a la base de datos", error);
  }
};

module.exports = conectarBD;
