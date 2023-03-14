//req RECIBE VALORES
//res ENVIA VALORES

const Usuarios = require('../models/usuarios');
const { response } = require('express');
const mysql = require('../database/dbmysql')

const conn = mysql();


const getUsuario = async (req, res = response) => {

    conn.query(
        'SELECT * FROM usuario',
        function(err, results, fields){
            console.log(results);
            console.log(fields);
        }
    )
   
}

const crearUsuario = async (req, res) => {
    

}

const actualizarUsuario = async (req, res) => {

    

    
}

const eliminarUsuario = async (req, res) => {
   

   
}


module.exports = {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
}