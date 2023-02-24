const {Router} = require('express');
const {getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} = require('../controllers/usuarios');
const {check} = require ('express-validator');
const { validarCampos } = require('../middlewares/validaciones');


const router = Router();

router.get('/', getUsuario);

router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El correo es obligatorio').not().isEmpty().isEmail(),
        check('password', 'El contraseña es obligatorio').not().isEmpty(),
        validarCampos
        
    ], crearUsuario);

router.put('/', actualizarUsuario)

router.delete('/', eliminarUsuario)


module.exports = router;