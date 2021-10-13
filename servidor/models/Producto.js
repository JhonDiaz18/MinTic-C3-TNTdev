const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    name: {
        type: String,
        required: true
    },
    id_product: {
        type: String,
        required: true,
        unique: true
    },
    value_product: {
        type: String,
        required: true,
    },
    state_product: {
        type: String,
        required: true,
    },


}, );

module.exports = model('Producto', ProductoSchema);