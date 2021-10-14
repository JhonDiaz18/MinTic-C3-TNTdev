import './Home.css';
import React from 'react';
import GoogleLogin from 'react-google-login';
import Logo from "./logo.png";
import axios from 'axios';


const Home = () => {
    //Funciones
    const responseGoogle = (resp) => {
        console.log(resp);

        axios({
            method: 'POST',
            url: `${process.env.React_App_API_Url}/auth/google/login`,
            headers: {
                'Autorization': `Bearer ${resp.tokenID}`
            }
        })
            .then((resp) => {
                console.log(resp);
            })
            .catch(console.log);
    }
    //
    return (
        //Codigo HTML
        <>
            <body className="bodyhome">
                <main>
                    <div className="encabezado">
                        <h4 className="h4Home">Iniciar sesion</h4>
                        {/* <button className = "butoomGoogle">
                <img src={Google} alt="logoGoogle" />
                <a href="Productos1.html">Gmail</a> 
            </button> */}
                    </div>
                    <div className="google">
                        <GoogleLogin
                            clientId="737691121751-1ukdm2td5rrivg53cblsg893ppk6vcfl.apps.googleusercontent.com"
                            buttonText="Iniciar sesión con Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                    <hr />

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
