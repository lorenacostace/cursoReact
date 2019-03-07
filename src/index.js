import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Characters from './Characters';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import MyForm from './Form';
import Char from './Char';


ReactDOM.render(
    <Router>
        <div>
            <Route path = "/form" component={MyForm}/>
            <Route path = "/index" component={Characters}/>
            <Route path = "/personaje/:id" component={Char}/>
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
