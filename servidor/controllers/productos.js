const { response } = require('express');
//const {validationResult}=require('express-validator');
const Producto = require('../models/Producto');


const getProductos = async (req, resp = response) => {
    const productos = await Producto.find().populate('name');

    resp.status(200).json({
        ok: true,
        msg: 'Lista de Productos',
        productos
    })
}


const setProducto = async (req, resp = response) => {

    const producto = new Producto(req.body);

    try {

        const us = await producto.save();

        resp.status(201).json({
            ok: true,
            msg: 'Producto Creado',
            usuario: us
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el producto',
        })
    }

    resp.json({
        ok: true,
        msg: 'Crear producto'
    })
}
/**crearProducto */

const crearProducto = async (req, resp = response) => {
    const producto = new Producto(req.body);
    try {
        const productSave = await producto.save();
        resp.status(200).json({
            ok: true,
            msg: 'Producto creado exitosamente!!',
            productSave
        });
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error en la creacion del producto',
        });
    }
}




/**actualizarProducto */

const actualizarProducto = async (req, resp = response) => {
    const productoId = req.params.id;
    //console.log(productoId);
    try {
        const producto = await Producto.findById(productoId);
        //console.log(producto);
        if (!producto) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del producto no coincide con ningun elemento en la DB',
            });
        }
        const productoActualizado = await Producto.findByIdAndUpdate(productoId, req.body, { new: true });
        console.log(productoActualizado);
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

/**eliminarProducto */

const eliminarProducto = async (req, resp = response) => {
    const productoId = req.params.id;
    try {
        const producto = await Producto.findById(productoId);
        if (!producto) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del producto no coincide con ningun elemento en la DB',
            });
        }
        await Producto.findByIdAndDelete(productoId);
        resp.json({
            ok: true,
            msg: 'Producto eliminado exitosamente!! ',
        });

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error en la eliminacion del producto',
        });
    }


}


module.exports = {
    getProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};