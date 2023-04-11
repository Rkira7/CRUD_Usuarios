const { Schema, model } = require("mongoose");

const UsuariosSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    curp: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        default: 'USER_ROLE'
    }


    ///FORCE
},
{
    versionKey: false,
    timestamps: true
});

UsuariosSchema.method('toJSON', function(){
    const {_id, password, ...object} = this.toObject();
    object.uid = _id;
    return object;
})
                        //PARA CREAR EL NOMBRE DE LA TABLA
module.exports = model('Usuarios', UsuariosSchema)