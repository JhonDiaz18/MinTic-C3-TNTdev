import './Ventas_2.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Header from '../Encabezado/Header';
import Pagination from 'react-bootstrap/Pagination'

const Ventas_2 = () => {
    //Funciones
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    //
    return (
        //Codigo HTML
        <>
            <Header />
            <div className = "divtable">
            <h1 className = "Titulo2"> Listado de Ventas </h1>
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
            <div>
                <center><Pagination>{items}</Pagination></center>
            </div>
            
        </>
        //
    );
}

export default Ventas_2;