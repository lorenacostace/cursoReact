import React, { Component } from 'react';
import './App.css';

export default class CharacterCard extends Component{

  constructor(props){
    super(props);
    console.log('constructor');

    // Creamos un estado
    this.state = {app: true}
  }

  // Se ejecuta cuando se ha terminado de montar
  componentDidMount(){
    this.setState({app: false}); // Cuando acabe de montarse, cambiamos el estado a false
    console.log('did mount');
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('did update');
  }

  componentWillUnmount(){
    console.log('will unmount');
  }

  // Comprueba si el estado ha sido modificado.
  // Si es true se ejecuta el render, y si es false no se ejecuta el render. Si no ejecuta el render, entonces no se
  //comprueba el estado, y se ejecuta App
  shouldComponentUpdate(nextProps, nextState){
    console.log('should??');
    return false;
  }

  // Se necesita crear un estado inicial (ahora no tiene sentido), y debe devolver algo
  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps');
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate');
  }

  render() {
    return (
        <div className="card">
          { this.state.app ? <App/> : <span></span> }
          <h2>Nombre personaje</h2>
          <p>Estado</p>
          <p>Género</p>
          <p>Capítulos</p>

        </div>
    );
  }
}

export class App extends Component {
  componentDidMount(){
    this.setState({app: false}); // Cuando acabe de montarse, cambiamos el estado a false
    console.log('App: did mount');
  }

  componentWillUnmount(){
    console.log('App: will unmount');
  }

  render() {
    return (
      <div className="rym">
        <h1>Rick y Morty</h1>

      </div>
    );
  }
}
