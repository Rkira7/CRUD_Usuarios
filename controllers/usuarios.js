//req RECIBE VALORES
//res ENVIA VALORES

const Usuarios = require('../models/usuarios');
const { response } = require('express');
const mysql = require('../database/dbmysql')

const conn = mysql();


const getUsuario = async (req, res) => {

    /*conn.query(
        'SELECT * FROM usuario',
        function(err, results, fields){
            console.log(results);
            console.log(fields);
        }
    )*/

    let qr = 'SELECT * FROM usuario';

    conn.query(qr ,(err, results,) => {
            if(err){
                console.log(err)
            }
            if(results.length > 0){
                res.send({
                    messge: 'Todos los usuario',
                    data: results
                })
            }
        }
    )
   
}

const crearUsuario = async (req, res) => {

    let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;
    let curp = req.body.curp ?? '';
    let role = req.body.role ?? 'USER_ROLE';


    let qr = `INSERT INTO usuario(nombre, email, password, curp, rol) VALUES ('${nombre}','${email}','${password}','${curp}','${role}')`;

    conn.query(qr ,(err, results,) => {
       
            if(err){
                console.log(err)
            }
            else{
                res.send({
                    messge: 'Usuario Creado',
                    data: results
                })
            }     
        }
    )

}

const actualizarUsuario = async (req, res) => {

    let qrID = req.params.id;
    let nombre = req.body.nombre;
    let email = req.body.email;
    let password = req.body.password;
    let curp = req.body.curp ?? '';
    let role = req.body.role ?? 'USER_ROLE';


    let qr = `UPDATE usuario SET nombre = '${nombre}', email = '${email}', password = '${password}', curp = '${curp}', rol = '${role}' WHERE id = '${qrID}'`;

    conn.query(qr ,(err, results,) => {
       
            if(err){
                console.log(err)
            }
            else{
                res.json({
                    messge: 'Usuario Actualizado',
                    data: results
                })
            }     
        }
    )
    
}

const eliminarUsuario = async (req, res) => {
    let qrID = req.params.id;

    let qr = `DELETE FROM usuario  WHERE id = '${qrID}'`;

    conn.query(qr ,(err, results,) => {
       
            if(err){
                console.log(err)
            }
            else{
                res.json({
                    messge: 'Usuario Eliminado',
                    data: results
                })
            }     
        }
    )

   
}


module.exports = {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
}