import './Productos_1.css';
import React from 'react';
import Header from '../Encabezado/Header';

const Productos_1 = () => {
    //Funciones


    //
    return (
        //Codigo HTML

        <main>
            <Header />
            <hr />

            <div id="cuerpo">
                <div id="regProductos">
                    <center>
                        <h2>Registro de Productos</h2>
                    </center>
                    <form>
                        <label>ID de producto</label>
                        <input type="text" name="ID de producto" id="producto" readonly />

                        <label>Descripcion</label>
                        <input type="text" name="Descripcion" id="descripcion" />

                        <label>Valor Unitario</label>
                        <input type="text" name="unitvalue" id="unitvalue" />

                        <label>Estado</label>
                        <select name="Estado" id="estado">
                            <option value="1">Disponible</option>
                            <option value="0">No disponible</option>
                        </select>
                    </form>
                    <button id="registrar">Registrar</button>
                </div>
            </div>
        </main>

        //
    );
}

export default Productos_1;