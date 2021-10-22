import './Ventas_1.css';
import React from 'react';
import Header from '../Encabezado/Header';

const Ventas_1 = () => {
    //Funciones


    //    
    return (  
        //Codigo HTML

        <>
            <Header />
            <hr />
            <center>
                <h2>Registro de Ventas</h2>
            </center><div id="cuerpo">
                <div id="cabeza">
                    <label>Cliente</label>
                    <input type="text" name="Nombre de Cliente" id="cliente" />
                    <label>Vendedor</label>
                    <input type="text" name="Responsable" id="responsable" readonly />
                    <label>Fecha</label>
                    <input type="date" name="Fecha" id="fecha" readonly />
                    <label>Doc. Cliente</label>
                    <input type="text" name="ID de Cliente" id="idcliente" />
                    <label>ID de Venta</label>
                    <input type="text" name="ID de Venta" id="idventa" />
                </div>
                <hr />
                <center>
                <table className = "tableVentas1">
                    <tr>
                        <th>ID de Producto</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                        <th>Precio unitario</th>
                        <th>Precio Total</th>
                    </tr>
                    <tr>
                        <td><input type="text" name="ID de producto" id="idproducto"></input></td>
                        <td type="text" name="Descripcion" id="descripcion">-</td>
                        <td><input type="text" name="Cantidad" id="cantidad"></input></td>
                        <td type="text" name="Precio Unitario" id="unitvalue">-</td>
                        <td><input type="text" name="Precio Total" id="totalprice" readonly></input></td>
                        {/* <td><button className = "buttonVentas1">+</button></td>
                        <td><button className = "buttonVentas1">-</button></td> */}
                    </tr>
                </table>
                </center>
                <div id="pie">
                    <label>Estado</label>
                    <select name="Estado" id="estado">
                        <option value="0">En Progreso</option>
                        <option value="1">Entregada</option>
                        <option value="2">Cancelada</option>
                    </select>
                    {/* <label id="pt">Total</label>
                    <td><input type="text" name="Precio Total venta" id="vtotalprice" readonly></input></td> */}
                </div>
                <hr />
                <center><button className="buttonRegistrar">Guardar</button></center>
            </div></>

        //
    );
}
 
export default Ventas_1;