import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Usuario extends Component {
    render() {
        const { usuario } = this.props;
        return (
            <tr>
                <th scope="row">{usuario.id}</th>
                <td>{usuario.nombre}</td>
                <td>
                    <button class="btn btn-light">
                        <Link to={{
                            pathname: `/usuario/editar/${usuario.id}`
                        }} >
                            Gestión
                        </Link>
                    </button>
                </td>
            </tr>
        )
    }
}
