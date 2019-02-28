import React, { Component } from 'react';
import './App.css';

export default class CharacterCard extends Component{

  constructor(props){
    super(props);
    this.state = {
      state: this.props.state,
      chapters: this.props.chapters
    }
  }

  kill = (param, e) =>{
      console.log(e.target.value, param);
      this.setState({state:e.target.value});
  };

  render() {
    return (
        <div className="card">
          <App titulo={this.props.titulo}/>
          <p>{this.state.state}</p>
          <p>{this.props.gender}</p>
          <p>{this.state.chapters}</p>
          <input onChange={this.kill.bind(this, "qwerty")} />
        </div>
    );
  }
}

export class App extends Component {

  render() {
    return (
      <div className="rym">
        <h1>{this.props.titulo}</h1>

      </div>
    );
  }
}
