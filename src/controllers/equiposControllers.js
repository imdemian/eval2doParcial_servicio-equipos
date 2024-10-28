const Equipo = require("../models/equipo");

const crearEquipo = async (req, res) => {
  try {
    const nuevoEquipo = new Equipo(req.body);
    const equipoGuardado = await nuevoEquipo.save();
    res.status(201).json(equipoGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el equipo", err: error });
  }
};

module.exports = {
  crearEquipo,
};
