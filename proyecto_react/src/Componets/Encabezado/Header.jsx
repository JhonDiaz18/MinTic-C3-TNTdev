import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className ="header">
            <div className ="container logo-nav-container">
                <a href="../Home" class="neon">TNTdevs</a>
                <nav className ="navigation">
                    <ul className ="desplegable">
                        <li><a href="../Productos_1">Productos</a>
                            <ul className ="des2">
                                <li><a href="../Productos_1">Registros</a></li>
                                <li><a href="../Productos_2">Listado</a></li>
                            </ul>
                        </li>

                        <li><a href="../Ventas_1">Ventas</a>
                            <ul className ="des2">
                                <li><a href="../Ventas_1">Registros</a></li>
                                <li><a href="../Ventas_2">Listado</a></li>
                            </ul>
                        </li>

                        <li><a href="../Usuarios">Usuarios</a></li>
                        <li className ="logOut"><a href="../Home">Log Out</a></li>
                    </ul>
                    </nav>
            </div>
        </header>
    );
}

export default Header;