import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CharacterCard extends Component{
  render() {
    return (
        <div className="card">
          <h2>Nombre personaje</h2>
          <p>Estado</p>
          <p>Género</p>
          <p>Capítulos</p>

        </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="rym">
        <h1>Rick y Morty</h1>

      </div>
    );
  }
}

export default CharacterCard;
