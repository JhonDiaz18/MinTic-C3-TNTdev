import './Productos_2.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Encabezado/Header';

const Productos_2 = () => {
    //Funciones

    //    
    return (
        //Codigo HTML
        <>
            <Header />
            <table>
                <caption><h2>Listado de productos</h2></caption>

                <tr>
                    <th>ID</th>
                    <th>Descripción</th>
                    <th>Precio Unitario</th>
                    <th>Estado</th>
                    <th>Acción</th>
                </tr>

                <tr>
                    <td>ID product</td>
                    <td>Description</td>
                    <td>$0.000</td>
                    <td>Disponible
                    </td>
                    <td><button className="buttonEditar">Edit</button><button className="buttonEliminar">Delete</button></td>
                </tr>
                <tr>
                    <td>ID product</td>
                    <td>Description</td>
                    <td>$0.000</td>
                    <td>No Disponible
                    </td>
                    <td><button className="buttonEditar">Edit</button><button className="buttonEliminar">Delete</button></td>
                </tr>
                <tr>
                    <td>ID product</td>
                    <td>Description</td>
                    <td>$0.000</td>
                    <td>Disponible
                    </td>
                    <td><button className="buttonEditar">Edit</button><button className="buttonEliminar">Delete</button></td>
                </tr>
                <tr>
                    <td>ID product</td>
                    <td>Description</td>
                    <td>$0.000</td>
                    <td>Disponible
                    </td>
                    <td><button className="buttonEditar">Edit</button><button className="buttonEliminar">Delete</button></td>
                </tr>
                <tr>
                    <td>ID product</td>
                    <td>Description</td>
                    <td>$0.000</td>
                    <td>No Disponible
                    </td>
                    <td><button className="buttonEditar">Edit</button><button className="buttonEliminar">Delete</button></td>
                </tr>
            </table>
        </>
        //
    );
}

export default Productos_2;