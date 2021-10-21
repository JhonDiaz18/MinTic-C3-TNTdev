import './Usuarios.css';
import React from 'react';
import Header from '../Encabezado/Header';


const Usuarios = () => {
    //Funciones


    //    
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
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input ></input></td>
                        <td><input ></input></td>
                        <td>
                            <select >
                                <option>---</option>
                                <option>Administrador</option>
                                <option>Vendedor</option>
                            </select>
                        </td>
                        <td>
                            <select >
                                <option>---</option>
                                <option>Autorizado</option>
                                <option>Pendiente</option>
                                <option>No Autorizado</option>
                            </select>
                        </td>
                        <td><button className="button1">Actualizar</button></td>
                    </tr>
                </tbody>



            </table></>

        //
    );
}

export default Usuarios;