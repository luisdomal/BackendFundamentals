const mongoose = require('mongoose')
const Mascota = mongoose.model('Mascota')

function crearMascota(req, res, next) {
  var mascota = new Mascota(req.body)
  mascota.anunciante = req.usuario.id
  mascota.estado = 'disponible'
  mascota.save().then(mascota => {
    res.status(201).send(mascota)
  }).catch(next)
}

function obtenerMascotas(req, res, next) {
  if(req.params.id){
    Mascota.findById(req.params.id)
			.populate('anunciante', 'username nombre apellido bio foto').then(mascotas => {
	      res.send(mascotas)
	    }).catch(next)
  } else {
    Mascota.find().then(mascotas=>{
      res.send(mascotas)
    }).catch(next)
  }
}

function modificarMascota(req, res, next) {
  console.log(req.mascota)
  Mascota.findById(req.params.id).then(mascota => {
    if (!mascota) { return res.sendStatus(401); }
    let nuevaInfo = req.body
    if (typeof nuevaInfo.nombre !== 'undefined')
    mascota.nombre = nuevaInfo.nombre
    if (typeof nuevaInfo.categoria !== 'undefined')
    mascota.categoria = nuevaInfo.categoria
    if (typeof nuevaInfo.fotos !== 'undefined')
      mascota.fotos = nuevaInfo.fotos
    if (typeof nuevaInfo.descripcion !== 'undefined')
      mascota.descripcion = nuevaInfo.descripcion
    if (typeof nuevaInfo.ubicacion !== 'undefined')
      mascota.ubicacion = nuevaInfo.ubicacion
    if (typeof nuevaInfo.estado !== 'undefined')
      mascota.estado = nuevaInfo.estado
      mascota.save().then(updatedMascota => {                                   //Guardando usuario modificado en MongoDB.
        res.status(201).json(updatedMascota.publicData())
      }).catch(next)
    }).catch(next)
  }

function eliminarMascota(req, res) {
  Mascota.findOneAndDelete({ _id: req.params.id }).then(r => {         //Buscando y eliminando mascota en MongoDB.
    res.status(200).send(`Mascota ${req.params.id} eliminado: ${r}`);
  })
}

module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
}