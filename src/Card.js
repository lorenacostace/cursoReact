import React, { Component } from 'react';
import Tittle from "./Tittle";
import './Card.css'

export default class Card extends Component{

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
                <Tittle setApp={this.setApp} titulo={this.props.titulo}/>
                <p>{this.state.state}</p>
                <p>{this.props.gender}</p>
                <p>{this.state.chapters}</p>
                <input onChange={this.kill.bind(this, "qwerty")} />
            </div>
        );
    }
}