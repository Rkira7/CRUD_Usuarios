const express = require('express');
require('dotenv').config()
const {dbCONN} = require('./database/db')


//CREAR EL SERVIDOR

const app = express();

dbCONN();


//LECTURA DE UN JSON

app.use(express.json())

/*app.get('/',(req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Entrando al servidor'
    })

    /*res.status(404).json({
        ok: false,
        msg: 'Error'
    })*/

    /*res.send({
        ok: true,
        msg: 'Entrando al servidor'
    })
})*/

app.use('', require('./routes/usuarios'));

//app.use('/usuarios', require('./routes/usuarios')); //ejemplo - localhost:3000/usuarios

app.listen(process.env.PORT, () => {
    console.log(`Te has conectado ${process.env.PORT}`)
})