import React, { Component } from 'react';

export default class Char extends Component{
    state = {
        name: "desconocido"
    };

    render(){
        return(
            <div>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}