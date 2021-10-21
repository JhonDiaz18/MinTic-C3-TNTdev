import './Home.css';
import React from 'react';
import GoogleLogin from 'react-google-login';
import Logo from "./logo.png";
import axios from 'axios';

//import { useLocation, useHistory } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
//import useAuth from '../../hooks/useAuth';
import notie from 'notie';
import 'notie/dist/notie.css';

const Home = () => {
    //
    //const auth = useAuth();
    // //const Location = useLocation();
    const history = useHistory();
    
    //
    const responseGoogle = async (resp) => {
        console.log(resp);
        try {
            const { status, data } = await axios({
            //const { data } = await axios({
                method: 'POST',
                url: 'http://localhost:4000/api/auth/google/login',
                headers: {
                    'Authorization': `Bearer ${resp.tokenId}`
                }
            });
            //console.log(data);
            
            console.log('status', status);

            if (status === 200) {
                console.log(data.token);
                // auth.setToken(data);
                // auth.setUser({ uid: data.uid, name: data.name });
                history.push("/Usuarios");

            } else if (status === 201) {
                notie.alert({ text: data.msg, type: 'success', time: 5 });
                
            }
            
            
            
        } catch (error) {
            console.log(error.toJSON());
            console.log(error.response.data);

            if (error.response.status === 401) {
                notie.alert({ text: error.response.data.msg, type: 'warning', time: 5 });
            } 

            else {
                notie.alert({ text: error.response.data.msg, type: 'error', time: 5 });
            }

        }
    }
    return (
        //Codigo HTML
        <>
            <body >

                <center>
                    <h1 >Bienvenidos a TNTdevs</h1>
                    <img src={Logo} alt="logo" />
                </center>
                <h3>
                    TNTdevs es una aplicación de software que permite realizar el seguimiento de ventas
                    en linea y fisicas de productos tecnológicos.
                </h3>
                <center>
                    <GoogleLogin
                        clientId='737691121751-1ukdm2td5rrivg53cblsg893ppk6vcfl.apps.googleusercontent.com'
                        buttonText="Iniciar Sesión"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </center>
            </body>
        </>

    );
}

export default Home;
