import './Ventas_2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
//import Table from 'react-bootstrap/Table';
import Header from '../Encabezado/Header';
//import Pagination from 'react-bootstrap/Pagination'
//import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import axios from 'axios';
import notie from 'notie';
import 'notie/dist/notie.css';

const Ventas_2 = () => {
    //CONSTANTES
    const history = useHistory();
    const constants = {
        'pathApi': 'http://localhost:4000/api',
        'listarVentas': '/ventas?'

    }

    //SERVICE
    const listarVentas = () => {

        try {
            return axios({
                method: 'GET',
                url: `${process.env.React_App_API_Url}${constants.listarVentas}`,
            });
        } catch (error) {
            throw error.status;
        }
    }

    const [ventas, setVentas] = useState([])

    const getVentas = async () => {
        try {
            const { data } = await listarVentas();
            setVentas(data.itemV);
            console.log(ventas);

        } catch ({ response: error }) {

            console.log(error);
        }
    }


    const editar =async () =>{
        // console.log(v);
        try {
            const { status, data } = await axios({
                method: 'GET',
                url: `${process.env.React_App_API_Url}${constants.listarVentas}`,
            });
            //console.log(data);
            
            console.log('status', status);

            if (status === 200) {
                history.push("/Ventas_1");

            } else if (status === 201) {
                notie.alert({ text: data.msg, type: 'success', time: 5 });
                
            }
            
            
            
        } catch (error) {
            console.log(error.toJSON());
            console.log(error.response.data);

            if (error.response.status === 401) {
                notie.alert({ text: error.response.data.msg, type: 'warning', time: 5 });
            } 

            else {
                notie.alert({ text: error.response.data.msg, type: 'error', time: 5 });
            }

        }
    }

    //un intento de darle funcionalidad a la busqueda, en el cual fracase
    //la idea era recorrer las ventas y filtrar por id_sale
    //creando un nuevo objeto venta que solo tuviera la venta en si
    // const [venta, setVenta] = useState([])

    // const buscar =async (val) =>{
    //     for (const p in ventas){
    //         //console.log(ventas[p].id_sale);
    //         if (ventas[p].id_sale==val){
    //             setVenta({'0': ventas[p]});
    //             console.log(venta);
    //         }
    //         if (val==''){
    //             setVenta(ventas);
    //         }
    //     }

    // }

    useEffect(() => {
        getVentas();
        //buscar('0100');
    }, []);

    //
    return (
        //Codigo HTML
        <>
            <Header />
            <div className = "divtable">
            <h2> Listado de Ventas </h2>
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
            <br />
            <center>
            <table className = "tablaventas"> 
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cliente</th>
                        {/* <th scope="col">Responsable</th> */}
                        <th scope="col">Fecha</th>
                        <th scope="col">Total Venta</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ventas.map((ventas, index) => (
                            <tr key={ventas._id}>
                                <td>{ventas.id_sale}</td>
                                <td>{ventas.client}</td>
                                <td>{ventas.date}</td>
                                <td>{ventas.__v}</td>
                                <td>{ventas.state_sale}</td>
                                <td><button className="button1" onClick={editar} >Actualizar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </center>
            </div>
            {/* <div className = "pagination">
                <Pagination>{items}</Pagination>
            </div>
            <td><button className="button1" onClick={cambioRol} >Actualizar</button></td> */}
        </>
        //
    );
}

export default Ventas_2;