import './Home.css';
import React from 'react';

const Home = () => {
    //Funciones

    //
    return (
        //Codigo HTML
        <>
            <main>
                <div className="encabezado">
                    <img src="src\img\logo.png" alt="Logo" />
                    <h4 >Iniciar sesion con:</h4>
                    <button>
                        <img className="imghome" src="src\img\logo_google.png" alt="LogoGoogle" /> <a href="../Productos_1">Gmail</a>
                    </button>
                </div>
            </main>
        </>
        //
    );
}

export default Home;
