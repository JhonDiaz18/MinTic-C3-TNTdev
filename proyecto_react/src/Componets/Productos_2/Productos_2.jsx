import './Productos_2.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Encabezado/Header';
//import Pagination from 'react-bootstrap/Pagination'
//import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

const Productos_2 = () => {
    //Funciones

    //    
    return (
        //Codigo HTML
        <>
            <Header />
            <br />
           
            <h2>Listado de productos</h2>
            <br />
            <div>
            <center>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Escriba el ID a buscar"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">Buscar</InputGroup.Text>
            </InputGroup>
            </center>
            </div>
            
            
            <table className = "tableProductos2">
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
            </table>
        </>
        //
    );
}

export default Productos_2;