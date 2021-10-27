import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import Home from '../Componets/Home/Home';
import { ContentRouter } from './ContentRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={ Home } />
                    <PrivateRoute path="/" component={ ContentRouter } />  
                </Switch>
            </div>
        </Router>
    )
}