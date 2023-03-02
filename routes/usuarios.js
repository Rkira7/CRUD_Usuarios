const {Router} = require('express');
const {getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} = require('../controllers/usuarios');
const {check} = require ('express-validator');
const { validarCampos } = require('../middlewares/validaciones');


const router = Router();

router.get('/', getUsuario);

router.post('/', 
    [
        //VEFIFICA QUE LAS CONDICIONES ESTEN BIEN LOS DATOS DE ENTRADA
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El correo es obligatorio').not().isEmpty().isEmail(),
        check('password', 'El contraseña es obligatorio').not().isEmpty(),
        //MANDA EL ERROR QUE HAYA OCURRIDO
        validarCampos
        
    ], crearUsuario);

router.put('/:id',  [
    //VEFIFICA QUE LAS CONDICIONES ESTEN BIEN LOS DATOS DE ENTRADA
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo es obligatorio').not().isEmpty().isEmail(),
    check('password', 'El contraseña es obligatorio').not().isEmpty(),
    //MANDA EL ERROR QUE HAYA OCURRIDO
    validarCampos
    
],actualizarUsuario)

router.delete('/:id', eliminarUsuario)


module.exports = router;