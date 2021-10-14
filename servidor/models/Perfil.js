const { Schema, model } = require('mongoose')

const PerfilSchema = Schema({
    nombre: { type: String, required: true},

},
{   
    collection: 'perfiles'
})

module.exports = model('Perfil', PerfilSchema)