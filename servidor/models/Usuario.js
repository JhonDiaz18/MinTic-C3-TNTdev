const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    perfil: { type: Schema.Types.ObjectId, ref: 'Perfil', required: true},
    estado: { type: Boolean, required: true},
    // fecha: { type: Date, default: Date.now}
})

module.exports = model('Usuario', UsuarioSchema)