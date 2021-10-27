import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from '../Componets/Home/Home';
import Productos_1 from '../Componets/Productos_1/Productos_1';
import Productos_2 from '../Componets/Productos_2/Productos_2';
import ListarUsuarios from '../Componets/Usuarios/Usuarios';
import Ventas_1 from '../Componets/Ventas_1/Ventas_1';
import Ventas_2 from '../Componets/Ventas_2/Ventas_2';



export const ContentRouter = () => {
    return (
        <>
            <main >
                <Switch>

                <Route exact path='/' component={Home} />
                    <Route exact path='/Productos_1' component={Productos_1} />
                    <Route exact path='/Productos_2' component={Productos_2} />
                    <Route exact path='/Usuarios' component={ListarUsuarios} />
                    <Route exact path='/Ventas_1' component={Ventas_1} />
                    <Route exact path='/Ventas_2' component={Ventas_2} />
                    <Redirect to="/#" />

                </Switch>
            </main>

        </>

    )
}