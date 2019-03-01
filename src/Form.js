import React, { Component } from 'react';

export default class Form extends Component{
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
        this.props.addCharacter(character)
    };

    render() {
        return(
            <div>
                <input type="text" onChange={this.change.bind(this, "name")} placeholder="name" value={this.state.name}/>
                <input type="text" onChange={this.change.bind(this, "state")} placeholder="state" value={this.state.state}/>
                <input type="text" onChange={this.change.bind(this, "gender")} placeholder="gender" value={this.state.gender}/>
                <input type="text" onChange={this.change.bind(this, "chapters")} placeholder="chapters" value={this.state.chapters}/>
                <button onClick={this.saveCharacter}>Guardar</button>
            </div>
        );
    }
}