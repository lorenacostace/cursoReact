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

    addCharacter = (character) => {
      this.setState({characters: [...this.state.characters, character]})
    };

    rmCharacter = (name) => {
        let copy = [...this.state.characters];
        let index = -1;

        copy.forEach((ch, i) => {
           if (ch.name === name){
               index = i
           }
        });

        if(index !== -1){
            copy.splice(index, 1); // Para borrar
            this.setState({characters: copy})
        }
    };

    render() {
        return(
            <div>
                <Form addCharacter = {this.addCharacter} name="rick" />
                {this.state.characters.map((ch, i) =>
                    <CharacterCard rmCharacter={this.rmCharacter} key={i} titulo={ch.name} state={ch.status} gender={ch.gender} chapters={this.extractChapters(ch.episode)} />
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
      this.setState({state: e.target.value});
  };

  rmCharacter = (e) => {
    console.log("Props", this.props.titulo);
    this.props.rmCharacter(this.props.titulo) // Lo llamamos asi porque en el render del padre, titulo={ch.name}
  };

  render() {
      console.log(this.state.characters);
    return (
        <div className="card">
          <button onClick={this.rmCharacter}>Eliminar</button>
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

export class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name || "Rick", // Valores por defecto en el caso de que no tenga nada
            state: this.props.state || "alive",
            gender: this.props.gender || "female",
            chapters: this.props.chapters || ["1", "2"]
        }
    }

    change = (value, e) => {
        let tmp = this.state;
        tmp[value] = e.target.value;
        this.setState(tmp)
    };

    saveCharacter = (e) => {
      let character = {
          name: this.state.name,
          state: this.state.state,
          gender: this.state.gender,
          episode: this.state.chapters
      };
      this.props.addCharacter(character)
    };

    render() {
        return(
            <div>
                <input type="text" onChange={this.change.bind(this, "name")} placeholder="name" value={this.state.name}/>
                <input type="text" onChange={this.change.bind(this, "state")} placeholder="state" value={this.state.state}/>
                <input type="text" onChange={this.change.bind(this, "gender")} placeholder="gender" value={this.state.gender}/>
                <input type="text" onChange={this.change.bind(this, "chapters")} placeholder="chapters" value={this.state.chapters}/>
                <button onClick={this.saveCharacter}>Guardar</button>
            </div>
        );
    }
}
