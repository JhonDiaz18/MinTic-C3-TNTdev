const {response} =require('express');
//const {validationResult}=require('express-validator');
const Venta = require ('../models/Ventas');

const getVentas = async (req, resp = response) => {
    let id_venta = req.query;
    try {
        let itemV = await Venta.find(id_venta);   
        resp.status(200).json({
            ok: true,
            msg: 'El ID corresponde a la venta:',
            itemV
        });
    } catch (error) {
        console.log(error)
        resp.status(404).json({
        ok: false,
        msg: 'No esta la venta',
        });
    }
}



const crearVenta = async (req, resp = response) => {
    const venta = new  Venta(req.body);
    try {
        const productSave = await venta.save(); 
        resp.status(200).json({
            ok: true,
            msg: 'Venta creada exitosamente!!',
            productSave
        });
    } catch (error) {
            console.log(error)
            resp.status(500).json({
                ok: false,
                msg: 'error en la creacion de la venta',
        });
    }   
}

const actualizarVenta= async (req, resp = response) => {
    const ventaId = req.params.id;
    try {
        const venta = await Venta.findById(ventaId); 
        if(!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la venta no coincide con ningun elemento en la DB',
            });
        }

    const ventaActualizada = await Venta.findByIdAndUpdate(ventaId,req.boody,{new:true});

        resp.json({
            ok: true,
            msg: 'Venta actualizada exitosamente!! ',
        });
    
    } catch (error) {
            console.log(error)
            resp.status(500).json({
                ok: false,
                msg: 'error en la actualizacion de la venta',
        });
    }  
}

const eliminarVenta = async (req, resp = response) => {
    const ventaId = req.params.id;
    try {
        const venta = await Venta.findById(ventaId); 
        if(!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la venta no coincide con ningun elemento en la DB',
            });
        }
        await Venta.findByIdAndDelete(ventaId);
        resp.json({
            ok: true,
            msg: 'Venta eliminada exitosamente!! ',
        });
    
    } catch (error) {
            console.log(error)
            resp.status(500).json({
                ok: false,
                msg: 'error en la eliminacion de la venta',
        });
    }  


}


module.exports={
    getVentas,
    crearVenta,
    actualizarVenta,
    eliminarVenta
};