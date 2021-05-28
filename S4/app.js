// iniciar el jason package
// npm init

//Crear estructura del proyecto

//Instalar dependencias
// npm i express cors

//Agregar scripts de ejecución en package.json
// cambiar el script de test y sustituir con los siguientes:
//     "start": "node ./app.js",
//     "dev": "nodemon .app/js"

// Sirve para crear un servidor (API)
const express = require('express');
// Sirve para el intercambio de recursos de origen cruzado o CORS
// (Cross-origin resource sharing, en sus siglas en ingles)
const cors = require('cors');

//Objeto global de la app
var app = express();

app.use(cors());
//Encode las url's
app.use(express.urlencoded({ extended: false}));
//Aceptar JSON's
app.use(express.json());

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

app.use(function(req,res, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

var server = app.listen(3000, function(){
    console.log('Escuchando en el puerto localhost:' + 3000);
})

// Con el comando npm run star inicializamos el servidor con node, con el comando npm run dev inicializamos el servidor con nodemon