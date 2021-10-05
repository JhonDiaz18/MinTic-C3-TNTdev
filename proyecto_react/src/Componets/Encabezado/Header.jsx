import React from 'react';
import './Header.css'

const Header = () => {
    return (  
        <header className="header">
        <div className="container logo-nav-container">
            <a href="../Home" className="neon">TNTdevs</a>
            <nav className="navigation">
                <ul>
                    <li><a href="../Home" >Inicio</a></li>
                    <li><a href="../Home">Acerca</a></li>
                    <li><a href="../Productos_1">Productos</a></li>
                    <li><a href="../Ventas_1">Ventas</a></li>
                    <li><a href="../Usuarios">Usuarios</a></li>
                    <li><a href="../Home">Log Out</a></li>
                </ul>
             
            </nav>
        </div> 
    </header>
    );
}
 
export default Header;