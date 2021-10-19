import './Home.css';
import React from 'react';
import GoogleLogin from 'react-google-login';
// import Logo from "./logo.png";
import axios from 'axios';


const Home = () => {
    //Funciones
    //** async es para trabajar con promesas, transforma la función en promesa */
    const responseGoogle = async (resp) => {
        console.log(resp);
        try {
          //** Debido al async se utiliza el await, el await es para que la ejecución de una
          // promesa se ejecute de forma asincrona */
          const { data } = await axios({
            method: 'POST',
            url: 'http://localhost:4000/api/auth/google/login',
            headers: {
              'Authorization': `Bearer ${resp.tokenId}`
            }
          });
          console.log(data);
  
        } catch (error) {
          console.log(error.toJSON());
          console.log(error.response.data);
        }
    }
    return (
        //Codigo HTML
        <>
            <GoogleLogin
                clientId='737691121751-1ukdm2td5rrivg53cblsg893ppk6vcfl.apps.googleusercontent.com'
                buttonText="Iniciar Sesión"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
    
            {/* <body className="bodyhome">
                <main>
                    <div className="encabezado">
                        <h4 className="h4Home">Iniciar sesion</h4>
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
                </main>  
            </body> */}
        </>
        //
    );
}

export default Home;
