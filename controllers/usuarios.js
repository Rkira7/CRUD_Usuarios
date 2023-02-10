const getUsuario = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Obtener usuario'
    })
}

const crearUsuario = (req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Usuario Agregado'
    })
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