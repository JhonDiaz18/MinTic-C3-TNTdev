const {getVentas, crearVenta, actualizarVenta, eliminarVenta}=require('../controllers/ventas');
//const {validarJWT} = require('../middlewares/validar-jwt');
const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middleware/validar-campos');
const router = Router();
//router.use(validarJWT);

router.get('/',getVentas);

router.post(
    '/', 
    [
        check('client', 'El nombre del cliente es obligatorio').not().isEmpty(),
        check('id_client', 'El id del cliente es obligatorio').not().isEmpty(),
        check('id_sale', 'El id de la venta es obligatorio').not().isEmpty(),
        check('date', 'La fecha de la venta es obligatorio').not().isEmpty(),
        check('state_sale', 'El estado de la venta es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearVenta);

router.put(
    '/:id', 
    [
        check('client', 'El nombre del cliente es obligatorio').not().isEmpty(),
        check('id_client', 'El id del cliente es obligatorio').not().isEmpty(),
        check('id_sale', 'El id de la venta no se debe editar').isEmpty(),
        check('date', 'La fecha de la venta es obligatorio').not().isEmpty(),
        check('id_sale', 'El id de la venta es obligatorio').not().isEmpty(),
        check('state_sale', 'El estado de la venta es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarVenta);

router.delete('/:id',eliminarVenta);

module.exports=router;