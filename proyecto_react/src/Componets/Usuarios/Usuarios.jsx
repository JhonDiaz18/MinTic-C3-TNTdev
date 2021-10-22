import './Usuarios.css';
import React, { useEffect, useState } from 'react';
import Header from '../Encabezado/Header';
import axios from 'axios';
import notie from 'notie';
import 'notie/dist/notie.css';
// import useAuth from '../../hooks/useAuth';




const ListarUsuarios = () => {
    //CONSTANTES
    const constants = {
        'pathApi': 'http://localhost:4000/api',
        'listarUsuarios': '/usuarios/listar'
    }
    //SERVICE
    const listarUsuarios = () => {

        try {
            return axios({
                method: 'GET',
                url: `${process.env.React_App_API_Url}${constants.listarUsuarios}`,
                // headers: {
                //     'Authorization': `Bearer ${token}`
                // }
            });
        } catch (error) {
            throw error.status;
        }
    }

    const [usuarios, setUsuarios] = useState([])

    const getUsuarios = async () => {
        try {
            const { data } = await listarUsuarios();
            setUsuarios(data.usuarios);
            //console.log(productos)

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
    

    const cambioRol = async () => {
        notie.select({
            text: 'Seleccione el nuevo Rol a actualizar:',
            cancelText: 'Close',
            cancelCallback: function () {
                notie.alert({ type: 5, text: 'Cancel!' })
            },
            choices: [
                {
                    type: 2,
                    text: '1. Administrador',
                    handler: function () {
                        notie.alert({ type: 1, text: 'Un nuevo administrador!!' })
                        //
                    }
                },
                {
                    type: 2,
                    text: '2. Vendedor',
                    handler: function () {
                        notie.alert({ type: 1, text: 'Un nuevo Vendedor!!' })
                    }
                },
            ]
        })
    }

    useEffect(() => {
        getUsuarios();
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
                        usuarios.map((usuarios, index) => (
                            <tr key={usuarios._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{usuarios.name}</td>
                                <td>{usuarios.email}</td>
                                <td>{usuarios.rol.name}</td>
                                <td><button className="button1" onClick={cambioRol} >Actualizar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default ListarUsuarios;