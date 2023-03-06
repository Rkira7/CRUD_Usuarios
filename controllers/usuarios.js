//req RECIBE VALORES
//res ENVIA VALORES

const Usuarios = require('../models/usuarios');
const { response } = require('express');

const getUsuario = async (req, res = response) => {

    const usuarios = await Usuarios.find({}, 'nombre email curp role')

    res.status(200).json({
        ok: true,
        msg: 'Obtener usuario',
        usuarios
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

const actualizarUsuario = async (req, res) => {

    const uid = req.params.id;

    try {

        //BUSCA EL USUARIO POR EL ID
        const datosUsuario = await Usuarios.findById(uid);

        const  { password, email, ...campos } = req.body; // SE OMITEN EL PASSWORD Y EL EMAIL

        //VERIFICAR QUE EL EMAIL SEA DIFERENTE
        if(datosUsuario.email != email){
            
            //BUSCA UN USUARIO POR EL CORREO PARA VALIDAR
            const existeEmail = await Usuarios.findOne({email})

            //SI EL CORREO YA EXISTE
            if(existeEmail){
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe usuario con ese email',
                })
            }

        }

        campos.email = email; //PARA QUE SE PUEDA ACTUALIZAR  DE LOS CAMPOS OMITIDOS
        //campos.password = password;

        const usuarioActualizado = await Usuarios.findByIdAndUpdate(uid, campos, {rawResult: true});

        res.status(200).json({
            ok: true,
            msg: 'Usuario Actualizado',
            usuario: usuarioActualizado,
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se encontro el usuario con ese ID ',
            error
        })
    }

    
}

const eliminarUsuario = async (req, res) => {
   

    try {
        const uid = req.params.id;

         //BUSCA EL USUARIO POR EL ID
         const datosUsuario = await Usuarios.findById(uid);

         if(!datosUsuario){
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado',
            })
         }

        const usuarioEliminado = await Usuarios.findByIdAndDelete(uid);

        res.status(200).json({
            ok: true,
            msg: 'Usuario eliminado',
            usuario: usuarioEliminado
        })



    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Usuario no se ha eliminado',
            error
        })
    }
   
}


module.exports = {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
}