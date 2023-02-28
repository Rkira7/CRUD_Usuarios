const {response} = require ('express'); //PARA IDENTIFICAR QUE ES UNA VARIABLE DE TIPO RESPONSE
const {validationResult} = require ('express-validator');

//VALIDA LOS CAMPOS
const validarCampos = (req, resp = response, next) => {

    const errores = validationResult(req);

    if(!errores.isEmpty()){
        resp.status(400).json({
            ok:false,
            errors: errores.mapped()
        })
    }

    next();
}

module.exports = {validarCampos}