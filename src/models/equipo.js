const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const equipoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
});

const Equipo = mongoose.model("Equipo", equipoSchema);

module.exports = Equipo;
