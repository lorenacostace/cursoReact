import React, { Component } from 'react';
import Tittle from "./Tittle";
import './Card.css'

// Importamos los iconos de fontawesome
import {library} from "@fortawesome/fontawesome-svg-core";
import {faSkull, faHeart, faQuestion, faMale, faFemale} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Añadimos los iconos a la librería
library.add(faSkull, faHeart, faQuestion, faMale, faFemale);

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
        let icon_name = "";
        let icon_gender = "";

        switch (this.state.state) {
            case "Alive":
                icon_name = "heart";
                break;
            case "Dead":
                icon_name = "skull";
                break;
            case "unknown":
                icon_name = "question";
                break;
        }

        switch (this.props.gender) {
            case "Male":
                icon_gender = "male";
                break;
            case "Female":
                icon_gender = "female";
                break;
            case "unknown":
                icon_gender = "question";
                break;
        }

        return (
            <div className="card">
                <button onClick={this.rmCharacter}>Eliminar</button>
                <Tittle setApp={this.setApp} titulo={this.props.titulo}/>
                <p><FontAwesomeIcon icon={icon_name} /></p>
                <p><FontAwesomeIcon icon={icon_gender} /></p>
                <p>{this.state.chapters}</p>
                <input onChange={this.kill.bind(this, "qwerty")} />
            </div>
        );
    }
}