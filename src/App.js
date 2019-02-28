import React, { Component } from 'react';
import * as characters from './characters.json';
import './App.css';
import Card from "./index";

export default class Characters extends Component{
    constructor(props){
        super(props);
        this.state = {
            characters : characters.results
        }
    }

    extractChapters = (chapters) => {
        let res = [];

        chapters.forEach(ch =>
            res.push(ch.split("/").slice(-1)[0])
        );

        return res.join(",");
    };

    render() {
        return(
            <div>
                {this.state.characters.map((ch, i) =>
                    <CharacterCard key={i} titulo={ch.name} state={ch.status} gender={ch.gender} chapters={this.extractChapters(ch.episode)} />
                )}
            </div>
        );
    }
}
export class CharacterCard extends Component{

  constructor(props){
    super(props);
    this.state = {
      state: this.props.state,
      chapters: this.props.chapters,
      app: "qwerty"
    }
  }

  setApp = (param) => {
    this.setState({app: param})
  };

  kill = (param, e) =>{
      console.log(e.target.value, param);
      this.setState({state:e.target.value});
  };

  render() {
      console.log(this.state.characters);
    return (
        <div className="card">
          <App setApp={this.setApp} titulo={this.props.titulo}/>
          <p>{this.state.state}</p>
          <p>{this.props.gender}</p>
          <p>{this.state.chapters}</p>
          <input onChange={this.kill.bind(this, "qwerty")} />
        </div>
    );
  }
}

export class App extends Component {

    componentDidMount() {
        this.props.setApp("ytrewq");
    }

    render() {
    return (
      <div className="rym">
        <h1>{this.props.titulo}</h1>
      </div>
    );
  }
}
