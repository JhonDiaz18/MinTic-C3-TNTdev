import './Productos_2.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Header from '../Encabezado/Header';

const Productos_2 = () => {
    //Funciones

    //    
    return (  
        //Codigo HTML
        <>
            <Header />
            <div className = "divtable">
            <h1 className = "Titulo2"> Listado de Productos </h1>
            <br />
            <button>Registo</button>
            <button>Listado</button>
            <br />
            <br />
            <center>
            <Table striped bordered hover className = "tablaventas"> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Precio Unitario</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2547</td>
                        <td>Computador Portatil HP</td>
                        <td>$1'000.000</td>
                        <td>En progreso</td>
                        <td>Borrar</td>
                    </tr>
                    <tr>
                        <td>2547</td>
                        <td>Computador Portatil HP</td>
                        <td>$1'000.000</td>
                        <td>En progreso</td>
                        <td>Borrar</td>
                    </tr>
                    <tr>
                        <td>2547</td>
                        <td>Computador Portatil HP</td>
                        <td>$1'000.000</td>
                        <td>En progreso</td>
                        <td>Borrar</td>
                    </tr>
                </tbody>
            </Table>
            </center>
            </div>
        </>
        //
    );
}
 
export default Productos_2;