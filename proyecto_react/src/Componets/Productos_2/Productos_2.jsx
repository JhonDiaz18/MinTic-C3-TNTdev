import './Productos_2.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Encabezado/Header';
//import Pagination from 'react-bootstrap/Pagination'
//import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import notie from 'notie';
import 'notie/dist/notie.css';
import axios from 'axios';

const Productos_2 = () => {

    //CONSTANTES
    const constants = {
        'pathApi': 'http://localhost:4000/api',
        'listarProductos': '/productos'
    }
    //SERVICE
    const listarProductos = () => {

        try {
            return axios({
                method: 'GET',
                url: `${process.env.React_App_API_Url}${constants.listarProductos}`,
                // headers: {
                //     'Authorization': `Bearer ${token}`
                // }
            });
        } catch (error) {
            throw error.status;
        }
    }

    const [productos, setProducto] = useState([])

    const getProducto = async () => {
        try {
            const { data } = await listarProductos();
            setProducto(data.productos);

        } catch ({ response: error }) {

            console.log(error);
            // if (error.status === 401) {
            //     setTimeout(() => {
            //         //auth.logout();
            //     }, 3000);
            //     notie.alert({ text: error.data.msg, type: 'warning', time: 3 });
            // } else {
            //     notie.alert({ text: error.data.msg, type: 'error', time: 3 });
            // }
        }
    }
    

    // const cambioRol = async () => {
    //     notie.select({
    //         text: 'Seleccione el nuevo Rol a actualizar:',
    //         cancelText: 'Close',
    //         cancelCallback: function () {
    //             notie.alert({ type: 5, text: 'Cancel!' })
    //         },
    //         choices: [
    //             {
    //                 type: 2,
    //                 text: '1. Administrador',
    //                 handler: function () {
    //                     notie.alert({ type: 1, text: 'Un nuevo administrador!!' })
    //                     //
    //                 }
    //             },
    //             {
    //                 type: 2,
    //                 text: '2. Vendedor',
    //                 handler: function () {
    //                     notie.alert({ type: 1, text: 'Un nuevo Vendedor!!' })
    //                 }
    //             },
    //         ]
    //     })
    // }

    useEffect(() => {
        getProducto();
    }, []);

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


            <table className="tableProductos2">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        productos.map((productos, index) => (
                        <tr key={productos._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{productos.id_product}</td>
                            <td>{productos.name}</td>
                            <td>US ${productos.value_product}</td>
                            <td>{productos.state_product}</td>
                        
                            <td><button className="buttonEditar">Edit</button><button className="buttonEliminar">Delete</button></td>
                        </tr>
                         ))
                    }
                </tbody>
            </table>
        </>
        //
    );
}

export default Productos_2;