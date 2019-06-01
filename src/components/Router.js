import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from"react-router-dom";

import Usuarios from "./Usuarios";
import CrearUsuario from './CrearUsuario';
import NoRoute from './NoRoute';
import EditarUsuario from './EditarUsuario';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Usuarios} />
                    <Route exact path="/usuario/nuevo" component={CrearUsuario} />
                    <Route exact path="/usuario/editar/:id" component={EditarUsuario} />
                    <Route component={NoRoute} />
                </Switch>
            </BrowserRouter>
        )
    }
}
