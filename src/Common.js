import React from 'react';
import {NavLink} from "react-router-dom";

export  class Heading extends React.Component {
    render(){
        return(
            <div>
                <h1>Aplicaion de Rick & Morty</h1>
                <ul className="menu">
                    <li><NavLink to="/personaje/añadir">Formulario</NavLink></li>
                    <li><NavLink to="/index">Personajes</NavLink></li>
                </ul>
            </div>

        );
    }
}

export class Foot extends React.Component{
    render(){
        return(
            <div className="foot">
                <a href="">Condiciones de uso </a>
                <a href="">Terminos legales </a>
            </div>

        );
    }
}