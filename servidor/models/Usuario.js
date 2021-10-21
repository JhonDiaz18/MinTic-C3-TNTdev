const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        required: true,
        //** ID del rol de "Indefinido" (sacado directamente de la base de datos) */
        default: '616ae58281481faff2532920'
    },

    idToken: {
        type: String
    },
},);

module.exports = model('Usuario', UsuarioSchema)