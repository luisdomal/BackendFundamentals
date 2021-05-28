const Solicitud = require('../models/Solicitud')

function crear(req, res) {
  // Instanciaremos una nueva solicitud utilizando la clase solicitud
  var solicitud = new Solicitud(req.body)
  res.status(201).send(solicitud)
}

function obtener(req, res) {
  // Simulando dos solicitudes y respondiendolos
  var solicitud1 = new Solicitud(1, 1, '01/01/2021')
  var solicitud2 = new Solicitud(2, 2, '01/02/2021')
  res.send([solicitud1, solicitud2])
}

function modificar(req, res) {
  // simulando una solicitud previamente existente que el usuario utili
  var solicitud1 = new Solicitud(req.params.id, 1, '01/10/2021')
  var modificaciones = req.body
  solicitud1 = { ...solicitud1, ...modificaciones }
  res.send(solicitud1)
}

function eliminar(req, res) {
  res.status(200).send(`Solicitud ${req.params.id} eliminada`);
}

module.exports = {
  crear,
  obtener,
  modificar,
  eliminar
}