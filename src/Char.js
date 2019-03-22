import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Card from "./Card";


export default class Char extends Component{
    state = {
        character: null,
    };

    componentDidMount() {

        // Cogemos el id
        let id = this.props.match.params.id;
        fetch("/characters.json")
            .then(r => r.json())
            .then(d =>
                // Buscamos en nuestra lista de caracteres, el que coincida con nuestro id
                d.results.forEach((c) => {
                    if(c.name === id)
                        this.setState({character: c})
                }));


    }

    render(){
        if(!this.state.character)
            return <div></div>;

        let ch = this.state.character;

        return(
            <div>
                <h1>{ch.name}</h1>
                <Card titulo={ch.name} state={ch.status} gender={ch.gender} img={ch.image} />
                <Link to="/index">Volver</Link>
            </div>
        )
    }
}