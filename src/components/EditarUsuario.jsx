import React, { Component } from 'react';
import { editarUsuario, buscarUsuario, eliminarUsuario } from "../actions/usuarioActions";
import { connect } from "react-redux";

class EditarUsuario extends Component {
    state = { nombre: '' }

    componentDidMount() {
        this.props.buscarUsuario(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.setState(nextProps.usuario);        
    }

    handleChange = (event) => {
        this.setState({ nombre: event.target.value });
    }

    handleEditar = (event) => {
        event.preventDefault();
        this.props.editarUsuario(this.state).then(()=>{
            this.props.history.goBack();
        });
       
    }

    handleEliminar = (event) => {
        event.preventDefault();           
        this.props.eliminarUsuario(this.state.id).then(()=>{
            this.props.history.goBack();
        });
    }

    render() {
        return (
            <div>
                <span>Nombre</span> &nbsp;<input type="text" value={this.state.nombre} onChange={this.handleChange} /><br /><br />
                <button class="btn btn-success" onClick={this.handleEditar}>Editar</button> <br /> <br />
                <button  class="btn btn-danger" onClick={this.handleEliminar}>Eliminar</button>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        usuario: state.usuarios.usuario
    }
}

export default connect(mapStateToProp, { editarUsuario, buscarUsuario, eliminarUsuario })(EditarUsuario);