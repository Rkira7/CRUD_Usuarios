//req RECIBE VALORES
//res ENVIA VALORES

const Usuarios = require('../models/usuarios');
const { response } = require('express');

const getUsuario = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg: 'Obtener usuario'
    })
}

const crearUsuario = async (req, res) => {
    //DESESTRUCTURAR LOS DATOS
    const{nombre, email, password} =  req.body;

    try{

        //BUSCAR EMAIL
        const existeEmail = await Usuarios.findOne({ email})

        //VALIDAR CORREO
        if(existeEmail){
            return res.status(400).json({
                ok: false,
                msg: "El correo ya existe"
            })
        }

        console.log(req.body);
        //INSTANCIANDO LOS OBJETOS
        const usuarios = new Usuarios(req.body);

        //ALMACENAR EN LA BD
        await usuarios.save();

        res.status(200).json({
            ok: true,
            msg: 'Usuario Agregado',
            usuarios

        })

    }catch(error){
        console.log(error);

        res.json({
            ok: false,
            msg: error,
        })
    }

}

const actualizarUsuario = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Usuario Actualizado'
    })
}

const eliminarUsuario = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Usuario eliminado'
    })
}


module.exports = {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
}