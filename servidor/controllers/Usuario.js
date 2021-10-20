const { response } = require('express');
const Usuario = require('../models/Usuario');

//Listar Usuarios

const getUsuarios = async (req, resp = response) => {
    const usuarios = await Usuario.find().populate('rol');

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
        const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId, req.body, { new: true });
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
    getUsuarios,
    setUsuario,
    actualizarUsuario,
    eliminarUsuario
};