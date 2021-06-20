'use strict'

const myConnection = require('express-myconnection')
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const path = require('path');
const app = express();
// ------------------------------------------------------------------ Import de rutas ------------------------------------------------------------------ //
const vehicleRoutes = require('./routes/vehicle');
/*reconoce el objeto de solicitud entrante como cadenas o matrices*/
const { urlencoded } = require('express');


// ------------------------------------------------------------------ Puerto ------------------------------------------------------------------ //
app.set('port', process.env.PORT || 3200);
/*---------- Puerto en el cual escuchara el servidor ----------*/
app.listen(app.get('port'), ()=>{
    console.log('Servidor en el puerto 3200')
})

// ------------------------------------------------------------------ Vistas ------------------------------------------------------------------ //
/*se establece ejs como motor de plantillas*/
app.set('view engine', 'ejs');

/*se establece la direccion de la carpeta de vistas*/
app.set('views', path.join(__dirname, 'views'))

// ------------------------------------------------------------------ Middlewares ------------------------------------------------------------------ //
app.set(morgan('dev'));

/*Conexion a la base de datos */
app.use(myConnection(mysql, {
    host:'localhost',
    user:'root',
    password:'admin',
    port:3306,
    database:'controlvehicle'
}, 'single'));

/*desde express se obtienen los datos del formulario*/
app.use(express.urlencoded({extended:false}))

// ------------------------------------------------------------------ Rutas del servidor ------------------------------------------------------------------ //
app.use('/', vehicleRoutes);


//------------------------------------------------------------------ Archivos estaticos ------------------------------------------------------------------ //
app.use(express.static(path.join(__dirname, 'public')))
 




