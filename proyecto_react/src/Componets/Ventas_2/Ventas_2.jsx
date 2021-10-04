import './Ventas_2.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const Ventas_2 = () => {
    return (
        <>
            <h1>Pagina Ventas_2</h1>
            <Table striped bordered hover>
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
        </>
    );
}

export default Ventas_2;