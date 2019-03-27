import React, { Component } from 'react';
import Card from './Card';
import { Container, Row, Col, Input} from 'reactstrap';
import Link from "react-router-dom/es/Link";
import { actions } from './store.js';
import {connect} from "react-redux";


export class Characters extends Component{
    constructor(props){
        super(props);
        this.state = {
            characters : [],
            filter_name: ""
        }
    }

    componentDidMount() {
        if (this.props.characters.length === 0){
            // Hacemos una peticion a la API de los personajes
            fetch("https://rickandmortyapi.com/api/character/")
                .then(r => r.json())
                .then(d =>
                    this.props.set(d.results) // equivalente a "store.dispatch(actions.setChars(d.results))"
                );
        }
    }

    extractChapters = (chapters) => {
        let res = [];

        chapters.forEach(ch =>
            res.push(ch.split("/").slice(-1)[0])
        );

        return res.join(",");
    };

    rmCharacter = (name) => {
        let copy = [...this.state.characters];
        let index = -1;

        copy.forEach((ch, i) => {
            if (ch.name === name){
                index = i
            }
        });

        if(index !== -1){
            copy.splice(index, 1); // Para borrar
            this.setState({characters: copy})
        }
    };

    filterCharacters = (e) => {
        let value = "";

        if(e.target.value.length >= 3)
            value = e.target.value;

        this.setState({filter_name: value});
    };

    render() {
        return(
            <div>
                <br/>
                <Input onChange={this.filterCharacters} placeholder= "Filtrar personajes por nombre"/>
                <br/>
                <Container>
                    <Row>
                        {this.props.characters.length === 0 &&
                            <div>Cargando...</div>}
                        {this.props.characters.map((ch, i) => {
                            if(ch.name.includes(this.state.filter_name)){
                                return <Col key={i}>
                                            <Link to={"/personaje/" + ch.id}>
                                                <Card
                                                    rmCharacter={this.rmCharacter} key={i} titulo={ch.name} state={ch.status} gender={ch.gender}
                                                        img={ch.image} chapters={this.extractChapters(ch.episode)}
                                                />
                                            </Link>
                                        </Col>;
                            }
                            else {
                                return <div></div>;
                            }
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapState = (state) => {
    return { characters: state.characters }
};

// La propiedad set la estamos inyectando
const mapActions = { set: actions.setChars };

const characters = connect(mapState, mapActions)(Characters);

export default characters;