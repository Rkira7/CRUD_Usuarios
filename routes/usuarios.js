const {Router} = require('express');
const {getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuario);

router.post('/', crearUsuario);

router.put('/', actualizarUsuario)

router.delete('/', eliminarUsuario)


module.exports = router;