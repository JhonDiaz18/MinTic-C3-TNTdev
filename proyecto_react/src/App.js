import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Componets/Home/Home';
import Productos_1 from './Componets/Productos_1/Productos_1';
import Productos_2 from './Componets/Productos_2/Productos_2';
import Ventas_1 from './Componets/Ventas_1/Ventas_1';
import Usuarios from './Componets/Usuarios/Usuarios';
import Ventas_2 from './Componets/Ventas_2/Ventas_2';
import AuthProvider from './Providers/AuthProvider';
import { AppRouter } from './router/AppRouter';

function App() {

  return (
    
      <div>
        <AuthProvider>
          < AppRouter />
        </AuthProvider>
      </div>
     
   
  )
}

export default App;
