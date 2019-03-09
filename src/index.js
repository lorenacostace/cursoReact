import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import Characters from './Characters';
import MyForm from './Form';
import Char from './Char';
import Error404 from "./Error404";

import {BrowserRouter as Router, Route} from "react-router-dom";
import {NavLink, Switch }from "react-router-dom";



ReactDOM.render(
    <Router>
        <div>
            <ul className="menu">
                <li><NavLink to="/personaje/añadir">Formulario</NavLink></li>
                <li><NavLink to="/index">Personajes</NavLink></li>
            </ul>
            <Switch>
                <Route path = "/personaje/añadir" component={MyForm}/>
                <Route path = {["/", "/index", "/personajes", "/characters"]} exact component={Characters}/>
                <Route path = "/personaje/:id" component={Char}/>
                <Route component={Error404}/>
            </Switch>

        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
