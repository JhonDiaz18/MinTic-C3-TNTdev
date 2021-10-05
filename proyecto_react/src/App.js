import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Componets/Home/Home';
import Productos_1 from './Componets/Productos_1/Productos_1';
import Productos_2 from './Componets/Productos_2/Productos_2';
import Ventas_1 from './Componets/Ventas_1/Ventas_1';
import Usuarios from './Componets/Usuarios/Usuarios';
import Ventas_2 from './Componets/Ventas_2/Ventas_2';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Productos_1' component={Productos_1} />
          <Route exact path='/Productos_2' component={Productos_2} />
          <Route exact path='/Usuarios' component={Usuarios} />
          <Route exact path='/Ventas_1' component={Ventas_1} />
          <Route exact path='/Ventas_2' component={Ventas_2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
