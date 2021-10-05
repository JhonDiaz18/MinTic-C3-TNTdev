import './Home.css';
import React from 'react';
import Logo from "./logo.png";
import Google from "./logo_google.png";

const Home = () => {
    //Funciones

    //
    return (
        //Codigo HTML
        <>
        <body className = "bodyhome">
        <main>
        <div className="encabezado">
            <h4 className = "h4Home">Iniciar sesion</h4>
            {/* <button className = "butoomGoogle">
                <img src={Google} alt="logoGoogle" />
                <a href="Productos1.html">Gmail</a> 
            </button> */}
        </div>

        <hr/>

        <div className="cuerpoHome">
            <center>
                <h1 id="neon">Bienvenidos a TNTdevs</h1>
                <img src={Logo} alt="logo" />
            </center>
            <p className="parrafo"> 
                TNTdevs es una aplicación de software que permite realizar el seguimiento de las ventas 
                de un producto y/o servicio en una empresa.
            </p> 
        </div>
        </main>  </body> 
        </>
        //
    );
}

export default Home;
