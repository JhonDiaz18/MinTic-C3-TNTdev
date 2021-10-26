const {getProductos, crearProducto, actualizarProducto, eliminarProducto}=require('../controllers/productos');
//const {validarJWT} = require('../middlewares/validar-jwt');
const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middleware/validar-campos');
const router = Router();
//router.use(validarJWT);
const Task = require('../models/Producto');


router.get('/',getProductos);

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
  });

router.post(
    '/', 
    [
        check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('id_product', 'El id del producto es obligatorio').not().isEmpty(),
        check('value_product', 'El valor unitario del producto es obligatorio').not().isEmpty(),
        check('state_product', 'El estado del producto es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearProducto);

router.put(
    '/:id', 
    [
        check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('id_product', 'El id del producto no se debe editar').isEmpty(),
        check('value_product', 'El valor unitario del producto es obligatorio').not().isEmpty(),
        check('state_product', 'El estado del producto es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarProducto);

router.delete('/:id',eliminarProducto);

module.exports=router;