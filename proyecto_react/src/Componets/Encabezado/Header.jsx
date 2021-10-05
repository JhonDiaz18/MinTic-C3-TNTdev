import React from 'react';
import './Header.css'

const Header = () => {
    return (  
        <header className="header">
        <div className="container logo-nav-container">
            <a className="neon">TNTdevs</a>
            <nav className="navigation">
                <ul>
                    <li><a >Inicio</a></li>
                    <li><a href="">Acerca</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Ventas</a></li>
                    <li><a href="">Usuarios</a></li>
                    <li><a href="">Log Out</a></li>
                </ul>
             
            </nav>
        </div> 
    </header>
    );
}
 
export default Header;