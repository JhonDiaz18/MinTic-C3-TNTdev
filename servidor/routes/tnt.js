const {Router} =require('express');
const {check}=require('express-validator');
const router =Router();
const {crearUsuario,loginUsuario,revalidarToken, getUsuarios, setUsuario, actualizarUsuario, eliminarUsuario}=require('../controllers/tnt')

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El pasword debe ser de 6 caracteres').isLength({min:6}),
    ],
    crearUsuario);
router.post('/',loginUsuario);
router.get('/renew',revalidarToken);
router.post('/google/login', validarGoogleAuth, validarUsuarioGoogle)
//CRUD
router.get('/listar', getUsuarios);
router.post('/crear', setUsuario);
router.put('/actualizar/:id', actualizarUsuario);
router.delete('/eliminar/:id', eliminarUsuario);

module.exports=router;