import './Productos_1.css';
// import React from 'react';
import Header from '../Encabezado/Header';
import M from 'materialize-css';

import React, { Component } from 'react';

class Productos_1 extends Component {

  constructor() {
    super();
    this.state = {
        name: '',
        id_product: '',
        value_product: '',
        state_product: 'Disponible'
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }


  addTask(e) {
      fetch('http://localhost:4000/api/productos', {
        method: 'POST',
        body: JSON.stringify(this.state
        ),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })    
        .then(res => res.json())
        .then(data => {
            console.log(data)
            M.toast({html: 'Task Updated'});
            this.setState({name: '', id_product: '', value_product: '', state_product: 'Disponible'});
        //   this.fetchTasks();
        })
        e.preventDefault();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
        <main>
            <Header />
            <div id="cuerpo">
                <div id="regProductos">
                    <center>
                        <h2>Registro de Productos</h2>
                    </center>
                    <form onSubmit= {this.addTask}>
                        <label>Descripcion</label>
                        <div className = "name">
                        <input type="text" name="name" onChange = {this.handleChange} id="descripcion" value ={this.state.name}/>
                        </div>
                        <label>ID de producto</label>
                        <div className = "id_product">
                        <input type="text" name="id_product" onChange = {this.handleChange} id="producto" value ={this.state.id_product}/>
                        </div >
                        <label>Valor Unitario</label>
                        <div className = "value_product">
                        <input type="text" name="value_product" onChange = {this.handleChange} id="unitvalue" value ={this.state.value_product}/>
                        </div>
                        <label>Estado</label>
                        <div className = "state_product">
                        <select name="state_product" id="estado" onChange = {this.handleChange} value ={this.state.state_product}>
                            <option value="Disponible">Disponible</option>
                            <option value="No disponible">No disponible</option>
                        </select>
                        </div>
                        <button type="submit" className="buttonRegistrar">Registrar</button>
                    </form>
                </div>
            </div>
        </main>
    )
}
}

export default Productos_1;