const express = require('express');
require('dotenv').config()


//CREAR EL SERVIDOR

const app = express();




//LECTURA DE UN JSON

app.use(express.json())


app.use('', require('./routes/usuarios'));

//app.use('/usuarios', require('./routes/usuarios')); //ejemplo - localhost:3000/usuarios

app.listen(process.env.PORT, () => {
    console.log(`Te has conectado ${process.env.PORT}`)
})