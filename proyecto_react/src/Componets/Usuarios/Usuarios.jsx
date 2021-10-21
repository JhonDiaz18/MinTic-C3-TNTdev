import './Usuarios.css';
import React, { useEffect, useState } from 'react';
//import React, { useEffect } from 'react';
import Header from '../Encabezado/Header';
import axios from 'axios';
import notie from 'notie';
import 'notie/dist/notie.css';
import useAuth from '../../hooks/useAuth';




const ListarUsuarios = () => {
    //CONSTANTES
    const constants = {
        'pathApi': 'http://localhost:4000/api',
        'listarProductos': '/usuarios/listar'
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



    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        try {
            const { data } = await listarProductos();
            setProductos(data.usuarios);
            console.log(productos)

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

    useEffect(() => {
        getProductos();
    }, []);


    return (
        //Codigo HTML
        <>
            <Header />
            <br />
            <br />
            <br />
            <div>
                <h2>Listado de usuarios</h2>
            </div>
            <table className="tableUsuarios">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        productos.map((producto, index) => (
                            <tr key={producto._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{producto.name}</td>
                                <td>{producto.email}</td>
                                <td>{producto.rol.name}</td>
                                <td><button className="button1" onClick={getProductos} >Actualizar</button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table></>

        //
    );
}

export default ListarUsuarios;