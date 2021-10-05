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
            <table className = "tableUsuarios">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Acción</th>
                </tr>

                <tr>
                    <td><input type="text" placeholder="ID User"></input></td>
                    <td><input type="text" placeholder="Name"></input></td>
                    <td>
                        <select name="menu1">
                            <option>---</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                        </select>
                    </td>
                    <td>
                        <select name="menu">
                            <option>---</option>
                            <option>Autorizado</option>
                            <option>Pendiente</option>
                            <option>No Autorizado</option>
                        </select>
                    </td>
                    <td><button className = "button1" >Actualizar</button></td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="ID User"></input></td>
                    <td><input type="text" placeholder="Name"></input></td>
                    <td>
                        <select name="menu1">
                            <option>---</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                        </select>
                    </td>
                    <td>
                        <select name="menu">
                            <option>---</option>
                            <option>Autorizado</option>
                            <option>Pendiente</option>
                            <option>No Autorizado</option>
                        </select>
                    </td>
                    <td><button className = "button1" >Actualizar</button></td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="ID User"></input></td>
                    <td><input type="text" placeholder="Name"></input></td>
                    <td>
                        <select name="menu1">
                            <option>---</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                        </select>
                    </td>
                    <td>
                        <select name="menu">
                            <option>---</option>
                            <option>Autorizado</option>
                            <option>Pendiente</option>
                            <option>No Autorizado</option>
                        </select>
                    </td>
                    <td><button className = "button1" >Actualizar</button></td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="ID User"></input></td>
                    <td><input type="text" placeholder="Name"></input></td>
                    <td>
                        <select name="menu1">
                            <option>---</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                        </select>
                    </td>
                    <td>
                        <select name="menu">
                            <option>---</option>
                            <option>Autorizado</option>
                            <option>Pendiente</option>
                            <option>No Autorizado</option>
                        </select>
                    </td>
                    <td><button className = "button1" >Actualizar</button></td>
                </tr>
                <tr>
                    <td><input type="text" placeholder="ID User"></input></td>
                    <td><input type="text" placeholder="Name"></input></td>
                    <td>
                        <select name="menu1">
                            <option>---</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                        </select>
                    </td>
                    <td>
                        <select name="menu">
                            <option>---</option>
                            <option>Autorizado</option>
                            <option>Pendiente</option>
                            <option>No Autorizado</option>
                        </select>
                    </td>
                    <td><button className = "button1" >Actualizar</button></td>
                </tr>
            </table></>

        //
    );
}
 
export default Usuarios;