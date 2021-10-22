import './Ventas_1.css';
import Header from '../Encabezado/Header';
import M from 'materialize-css';

import React, { Component } from 'react';

class Ventas_1 extends Component {

  constructor() {
    super();
    this.state = {
        client: '',
        id_client: '',
        id_sale: '',
        date: '',
        state_sale:'En proceso'
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }


  addTask(e) {
      fetch('http://localhost:4000/api/ventas', {
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
            this.setState({client: '', id_client: '', id_sale: '', date: '', state_sale:'En proceso' });
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
        <>
            <Header />
            <hr />
            <form onSubmit= {this.addTask}>
            <center>
                <h2>Registro de Ventas</h2>
            </center><div id="cuerpo">
                
                <div id="cabeza">
                    <label>Cliente</label>
                    <input type="text" name="client" id="cliente" onChange = {this.handleChange} value ={this.state.client}/>
                    <label>Vendedor</label>
                    <input type="text" name="Responsable" id="responsable" readonly />
                    <label>Fecha</label>
                    <input type="date" name="date" id="fecha" readonly onChange = {this.handleChange} value ={this.state.date}/>
                    <label>Doc. Cliente</label>
                    <input type="text" name="id_client" id="idcliente" onChange = {this.handleChange} value ={this.state.id_client}/>
                    <label>ID de Venta</label>
                    <input type="text" name="id_sale" id="idventa" onChange = {this.handleChange} value ={this.state.id_sale}/>
                </div>
                <hr />
                <center>
                <table className = "tableVentas1">
                    <tr>
                        <th>ID de Producto</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                        <th>Precio unitario</th>
                        <th>Precio Total</th>
                    </tr>
                    <tr>
                        <td><input type="text" name="ID de producto" id="idproducto"></input></td>
                        <td type="text" name="Descripcion" id="descripcion">-</td>
                        <td><input type="text" name="Cantidad" id="cantidad"></input></td>
                        <td type="text" name="Precio Unitario" id="unitvalue">-</td>
                        <td><input type="text" name="Precio Total" id="totalprice" readonly></input></td>
                    </tr>
                </table>
                </center>
                <div id="pie">
                    <label>Estado</label>
                    <select name="state_sale" id="estado" onChange = {this.handleChange} value ={this.state.state_sale}>
                        <option value="En Progreso">En Progreso</option>
                        <option value="Entregada">Entregada</option>
                        <option value="Cancelada">Cancelada</option>
                    </select>
                </div>
                <hr />
                <center><button className="buttonRegistrar">Guardar</button></center>
            </div>
            </form>
            </>
    )
}
}

export default Ventas_1;