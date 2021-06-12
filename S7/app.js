// Crear proyecto de Node
// npm init -y

// Crear estructura de proyecto

// Instalar dependencias
// npm i express cors

// Agregar scripts de ejecución en package.json (atajos)

// Instalar nodemon (Solo si no lo tenemos)
// npm install -g nodemon

// Instalar dependencias
// npm i express-jwt jsonwebtoken mongoose mongoose-unique-validator passport passport-local

// Sirve para crear un servidor (API)
const express = require('express');
// El intercambio de recursos de origen cruzado o CORS 
// (Cross-origin resource sharing, en sus siglas en inglés)
const cors = require('cors');

const mongoose = require('mongoose')

// Objeto global de la app
var app = express();

app.use(cors());
// Encode las url`s
app.use(express.urlencoded({ extended: false }));
// Aceptar JSON`s
app.use(express.json());

mongoose.connect(
  "mongodb+srv://MXDOMINGUEZL:DcjLuSA8dFT0TdXk@luisdomal.3sw7j.mongodb.net/adoptaPet?retryWrites=true&w=majority"
)

mongoose.set("debug", true)

// Aquí se importarán los modelos Mascota y Solicitud cuando estén listos
/*********************** Mongoose Configuration *******************************/
require("./models/Usuario");
require('./config/passport');
require('./models/Mascota');
require('./models/Solicitud');

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});