const { Schema, model } = require('mongoose');

const VentaSchema = Schema({
    client: {
        type: String,
        required: true
    },
    id_client: {
        type: String,
        required: true,
    },
    id_sale: {
        type: String,
        required: true,
        unique: true
    },
    state_sale: {
        type: String,
        required: true,
    },
}, );

module.exports = model('Venta', VentaSchema);

