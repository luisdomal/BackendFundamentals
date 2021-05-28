const Mascota = require('../models/Mascota')

function crear(req, res) {
  // Instanciaremos un nuevo mascota utilizando la clase mascota
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtener(req, res) {
  // Simulando dos mascotas y respondiendolos
  var mascota1 = new Mascota(1, 'Firulais', 'Perro')
  var mascota2 = new Mascota(2, 'Matilda', 'Perro')
  res.send([mascota1, mascota2])
}

function modificar(req, res) {
  // simulando una mascota previamente existente que el usuario utili
  var mascota1 = new Mascota(req.params.id, 'Firulais', 'Perro')
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}

function eliminar(req, res) {
  res.status(200).send(`Mascota ${req.params.id} eliminada`);
}

module.exports = {
  crear,
  obtener,
  modificar,
  eliminar
}