//req RECIBE VALORES
//res ENVIA VALORES

const usuarios = require('../models/usuarios');
const Usuarios = require('../models/usuarios')


const getUsuario = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Obtener usuario'
    })
}

const crearUsuario = async (req, res) => {
    //DESESTRUCTURAR LOS DATOS
    const{nombre, email, password} =  req.body;

    try{
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