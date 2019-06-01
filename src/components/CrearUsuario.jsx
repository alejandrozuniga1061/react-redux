import React, { Component } from 'react';
import { crearUsuario } from "../actions/usuarioActions";
import { connect } from "react-redux";
class CrearUsuario extends Component {

    state = { nombre: '' };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event)  => {        
        event.preventDefault();
        this.props.crearUsuario(this.state);      
        this.props.history.goBack(); 
    }

    render() {
        return (
            <div>
                <span>Usuario</span> &nbsp;<input type="text" name="nombre" value={this.state.value} onChange={this.handleChange} /><br /><br />
                <button type="button" class="btn btn-success" onClick={this.handleSubmit}>Crear</button>
            </div>
        )
    }
}



export default connect(null, { crearUsuario })(CrearUsuario);