import React from 'react';
import './Header.css'

const Header = () => {
    return (  
        <header class="header">
        <div class="container logo-nav-container">
            <a class="neon">TNTdevs</a>
            <nav class="navigation">
                <ul>
                    <li><a href="" >Inicio</a></li>
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