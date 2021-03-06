import React, { Component } from 'react';
import {Form, Input, Button} from 'reactstrap';
import { connect } from "react-redux";
import { actions } from "./store";

export class MyForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name || "Rick", // Valores por defecto en el caso de que no tenga nada
            state: this.props.state || "Alive",
            gender: this.props.gender || "Female",
            chapters: this.props.chapters || ["1", "2"]
        }
    }

    change = (value, e) => {
        let tmp = this.state;
        tmp[value] = e.target.value;
        this.setState(tmp)
    };

    saveCharacter = (e) => {
        let character = {
            name: this.state.name,
            state: this.state.state,
            gender: this.state.gender,
            episode: this.state.chapters
        };
        this.props.add(character);
        this.props.history.push("/index");
    };

    render() {
        return(
            <Form>
                <Input type="text" onChange={this.change.bind(this, "name")} placeholder="name" value={this.state.name}/>
                <Input type="text" onChange={this.change.bind(this, "state")} placeholder="state" value={this.state.state}/>
                <Input type="text" onChange={this.change.bind(this, "gender")} placeholder="gender" value={this.state.gender}/>
                <Input type="text" onChange={this.change.bind(this, "chapters")} placeholder="chapters" value={this.state.chapters}/>
                <Button onClick={this.saveCharacter}>Guardar</Button>
            </Form>
        );
    }
}


// En este caso las propiedades son null porque no queremos inyectar ninguna propiedad
const form = connect(null, {add: actions.addChar})(MyForm);

export default form;