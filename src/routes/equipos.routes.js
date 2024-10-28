const express = require("express");
const Equipos = require("../models/equipo");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Servicio API funcionando correctamente");
});

router.post("/registroEquipos", async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevoEquipo = new Equipos({ nombre });
    const equipoGuardado = await nuevoEquipo.save();
    res.status(201).json(equipoGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al registrar un equipo", error });
  }
});

router.get("/equipos", async (req, res) => {
  try {
    const equipos = await Equipos.find({});
    res.status(200).json(equipos);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al obtener la lista de equipos", error });
  }
});

module.exports = router;
