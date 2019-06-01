import React, { Component } from 'react';
import store from './store';
import { Provider } from "react-redux";
import './App.css';
import Router from"./components/Router";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App fondo">
        <h1><span class="badge badge-secondary">CRUD USUARIOS</span></h1>
          <Router></Router>
        </div>
      </Provider>
    );
  }
}

export default App;
