const { response } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuarios');
const bcrypt = require('bcryptjs');
//const { generarJWT } = require('../helpers/jwt');
const Perfil = require('../models/Perfil');

// Task Model

const crearUsuario = async (req, resp = response) => {
    const { email, password } = req.body;
    try {

        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return resp.status(400).json({
                ok: false,
                msg: 'ya existe un usuario registrado con este email'
            });
        }

        usuario = new Usuario(req.body);

        /**Encriptando contraseña */
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        resp.status(201).json({
            ok: true,
            msg: 'Usuario creado de manera exitosa',
            uid: usuario.id,
            name: usuario.name
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al guardar el registro',
        });

    }
}

const loginUsuario = async (req, resp = response) => {

    const { email, password } = req.body;

    try {

        /**Confirmar email */
        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        /**Confirmar email */
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        /**Generar Token */
        const token = await generarJWT(usuario.id, usuario.name);

        resp.json({
            ok: true,
            msg: 'Ok',
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error al autenticar',
        });
    }
}
const revalidarToken = async (req, resp = response) => {
    const { uid, name } = req;
    /**Generar Nuevo Token */
    const token = await generarJWT(uid, name);

    resp.json({
        ok: true,
        token: token
    });

}

//Listar Usuarios

const getUsuarios = async (req, resp = response) => {
    const usuarios = await Usuario.find().populate('perfil');

    resp.status(200).json({
        ok: true,
        msg: 'Lista de Usuarios',
        usuarios
    })
}

//Crear Usuario

const setUsuario = async (req, resp = response) => {

    const usuario = new Usuario(req.body);

    try {

        const us = await usuario.save();

        resp.status(201).json({
            ok: true,
            msg: 'Usuario Creado',
            usuario: us
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el usuario',
        })
    }

    resp.json({
        ok: true,
        msg: 'Crear Usuario'
    })
}


// Actualizar Usuario

const actualizarUsuario = async (req, resp = response) => {
    const usuarioId = req.params.id;
    //console.log(productoId);
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId,req.body,{new:true});
        console.log(usuarioActualizado);
        resp.json({
            ok: true,
            msg: 'Producto actualizado exitosamente!! ',
        });
    
    } catch (error) {
            console.log(error)
            resp.status(500).json({
                ok: false,
                msg: 'error en la actualizacion del producto',
        });
    }  
}


    //Eliminar Usuario

    const eliminarUsuario = async (req, resp = response) => {
    const usuarioId = req.params.id;
    try {
        // const usuario = await Usuario.findById(usuarioId); 
        await Usuario.findByIdAndDelete(usuarioId);
        resp.json({
            ok: true,
            msg: 'Usuario eliminado exitosamente!! ',
        });

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error en la eliminacion del usuario',
        });
    }
    }



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    getUsuarios,
    setUsuario,
    actualizarUsuario,
    eliminarUsuario
};
