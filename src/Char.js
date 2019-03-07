import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Char extends Component{
    state = {
        name: "desconocido"
    };

    componentDidMount() {
    }

    render(){
        return(
            <div>
                <h1>{this.props.match.params.id}</h1>
                <h2>{this.props.match.params.genero}</h2>
                <Link to="/index">Volver</Link>
            </div>
        )
    }
}