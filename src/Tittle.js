import React, { Component } from 'react';
import './Tittle.css'

export default class Tittle extends Component {

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