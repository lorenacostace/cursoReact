import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {Heading, Foot}  from './Common';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import Characters from './Characters';
import MyForm from './Form';
import Char from './Char';
import Error404 from "./Error404";

import {BrowserRouter as Router, Route} from "react-router-dom";
import  { Switch } from "react-router-dom";
import {createStore} from "redux";

/* Redux */

const initialState = {
    characters: []
};

//Actions
function addChar(name, state, gender, chapters){
    return{
        type: "ADD_CHAR",
        payload: {
            name: name,
            state: state,
            gender: gender,
            chapters: chapters
        }
    }
}

// Reducers. Por parametro recibe el estado que por defecto esta vacio, y la accion.
function appReducer(state = {}, action){

    //Se hace el switch sobre el tipo
    switch (action.type) {
        case "ADD_CHAR":
            let newst = { ...state };
            let ch = { ...action.payload, id: newst.characters.length + 1};
            newst.characters.push(ch);
            return newst;
        default:
            return state;
    }
}

// Store
const store = createStore(appReducer, initialState);
window.store = store;
window.addChar = addChar;

/* End Redux */


ReactDOM.render(
    <Router>
        <div>
            <Heading/>
            <Switch>
                <Route path = "/personaje/añadir" component={MyForm}/>
                <Route path = {["/", "/index", "/personajes", "/characters"]} exact component={Characters}/>
                <Route path = "/personaje/:id" component={Char}/>
                <Route component={Error404}/>
            </Switch>
            <Foot/>
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
