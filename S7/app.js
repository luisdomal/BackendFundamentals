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

require("./models/Usuario");
require('./models/Mascota');
require("./config/passport");

app.use('/v1', require("./routes"));

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
})

var server = app.listen(3000, function() {
  console.log('Escuchando en el puerto localhost:' + 3000);
})