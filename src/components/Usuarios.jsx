import React, { Component } from 'react';
import { connect } from "react-redux";
import { listarUsuarios } from "../actions/usuarioActions";
import Usuario from "../components/Usuario";
import { Link } from "react-router-dom";

class Usuarios extends Component {
    componentDidMount() {
        this.props.listarUsuarios();
    }

    render() {
        const { usuarios } = this.props;
        return (
            <div>
                <Link to={{
                    pathname: '/usuario/nuevo'
                }}>
                    <button type="button" class="btn btn-primary">  + </button>
                </Link>

                <h1>Listado de usuarios</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Identificador</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Opción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((usuario, index) => {
                                return (<Usuario key={index} usuario={usuario}></Usuario>)
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        usuarios: state.usuarios.usuarios
    }
}
export default connect(mapStateToProp, { listarUsuarios })(Usuarios);