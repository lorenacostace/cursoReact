import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Card from "./Card";


export default class Char extends Component{
    state = {
        character: null,
        error: null,
    };

    componentDidMount() {

        // Cogemos el id
        let id = this.props.match.params.id;

        // Hacemos una peticion a la API pasandole el id del personaje
        fetch("https://rickandmortyapi.com/api/character/" + id)
            .then(r => r.json())
            .then(d => this.setState({character: d}))
            .catch(error => {
                console.error("Personaje no encontrado");
                this.setState({error: "Personaje no encontrado"});
            });
    }

    render(){
        if(!this.state.character) {
            return <div>
                this.state.error &&
                <div className="alert alert-danger">{this.state.error}</div>
            </div>;
        }

        let ch = this.state.character;

        return(
            <div>
                { this.state.error &&
                    <div className="alert alert-danger">{this.state.error}</div>
                }
                <h1>{ch.name}</h1>
                <h2>{ch.species}</h2>
                <Card
                    titulo={ch.name}
                    state={ch.status}
                    gender={ch.gender}
                    img={ch.image}
                />
                <Link to="/index">Volver</Link>
            </div>
        )
    }
}