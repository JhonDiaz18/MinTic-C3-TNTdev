import './Ventas_2.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Header from '../Encabezado/Header';

const Ventas_2 = () => {
    //Funciones
    

    //
    return (
        //Codigo HTML
        <>
            <Header />
            <div className = "divtable">
            <h1 className = "Titulo2"> Listado de Ventas </h1>
            <br />
            <center>
            <Table striped bordered hover className = "tablaventas"> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Responsable</th>
                        <th>Fecha</th>
                        <th>Total Venta</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2547</td>
                        <td>Pedro Pablo</td>
                        <td>Juan Manuel</td>
                        <td>25/10/2021</td>
                        <td>$1'000.000</td>
                        <td>En progreso</td>
                        <td>Borrar</td>
                    </tr>
                    <tr>
                        <td>2547</td>
                        <td>Pedro Pablo</td>
                        <td>Juan Manuel</td>
                        <td>25/10/2021</td>
                        <td>$1'000.000</td>
                        <td>En progreso</td>
                        <td>Borrar</td>
                    </tr>
                    <tr>
                        <td>2547</td>
                        <td>Pedro Pablo</td>
                        <td>Juan Manuel</td>
                        <td>25/10/2021</td>
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

export default Ventas_2;