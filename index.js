const express = require('express');
require('dotenv').config()
const {dbCONN} = require('./database/db')

const swaggerJSDocs = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


//CREAR EL SERVIDOR

const app = express();

dbCONN();


//LECTURA DE UN JSON

app.use(express.json())

//CONFIGURACION DE SWAGGER
const options = {
    definition: {
        openapi: '3.0.0',
        info:{
            title: 'Node JS API',
            version: '1.0.0'
        },
        servers:[
            {
                url:'http://localhost:3000'
            }
        ]
    },
    apis:['./index.js']
}
const swaggerSpec = swaggerJSDocs(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

/**
 * @swagger
 *  components:
 *      schemas:
 *          type: object
 *          Usuarios:
 *              example:
 *                  ok: true
 *                  msg: Obtener usuario
 *                  usuarios:
 *                  - nombre: Pizano
 *                    email: jc@gmail.com
 *                    curp: ''
 *                    role: USER_ROLE
 *                    uid: 63fd2442f11e5695f296f728
 *                  - nombre: Pizano
 *                    email: sd
 *                    curp: ''
 *                    role: USER_ROLE
 *                    uid: 63fd252116e14350932f0ce7
 *                  - nombre: pizanoo
 *                    email: jcP@gmail.com
 *                    curp: ''
 *                    role: USER_ROLE
 *                    uid: 63ff5473e88a0845a5041de6
 *                  - nombre: pizanoo
 *                    email: jcPz@gmail.com
 *                    curp: ''
 *                    role: USER_ROLE
 *                    uid: 63ff54d8e88a0845a5041dec
 */

/**
 * @swagger
 * /:
 *  get:
 *      summary: Este metodo GET nos muestra los usuarios
 *      description: Este metodo es para mostrar los usuarios
 *      responses:
 *          200:
 *              description: Test al metodo GET con mongoDB
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Usuarios'
 */

/**
 * @swagger
 * /:
 *  post:
 *      summary: Este metodo POST nos agregar un usuarios
 *      description: Este metodo para registrar usuarios
 *      requestBody:
 *          requiered: true
 *          content:
 *              application/json:
 *                  schema:
 *                       $ref: '#components/schemas/Usuarios'
 *      responses:
 *          200:
 *              description: Agregado satisfactoriamente
 */

/**
 * @swagger
 * /{id}:
 *  put:
 *      summary: Metodo PUT para actualizar un usuario
 *      decription: Este para actualizar 
 *      parameters:
 *        - in: path
 *          name: id
 *          requiered: true
 *          description: El ID es requerido
 *          schema:
 *              type: string
 *      requestBody:
 *          requiered: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/Usuarios'
 *      responses:
 *          200:
 *              description: Usuario Actualizado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Usuarios'
 *          500:
 *              description: Error del proceso
 */

/**
 * @swagger
 * /{id}:
 *  delete:
 *      summary: Metodo DELETE para eliminar un usuario
 *      description: Eliminar usuario
 *      parameters:
 *        - in: path
 *          name: id
 *          requiered: true
 *          description: El ID es requerido
 *          schema:
 *              type: string
 *      responses:
 *          200:
 *              description: Usuario Eliminado
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/Usuarios'        
 */



/*app.get('/',(req, res) => {
    res.status(200).json({
        ok: true,
        msg: 'Entrando al servidor'
    })

    /*res.status(404).json({
        ok: false,
        msg: 'Error'
    })*/

    /*res.send({
        ok: true,
        msg: 'Entrando al servidor'
    })
})*/

app.use('', require('./routes/usuarios'));

//app.use('/usuarios', require('./routes/usuarios')); //ejemplo - localhost:3000/usuarios

app.listen(process.env.PORT, () => {
    console.log(`Te has conectado ${process.env.PORT}`)
})