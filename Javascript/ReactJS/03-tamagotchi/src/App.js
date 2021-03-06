import React, { Component } from 'react';
import moment from 'moment';
import PetContainer from "./components/PetContainer";
import EggContainer from './components/EggContainer.js';

import './styles/App.css';

//not sure if this is in right place - might need to put on egg lifecycle component
const PETS = [{
    name: "Bun",
    species: "Bunny",
    hatchDate: null,
}, {
    name: "Pusheen",
    species: "Delightfully Chubby Cat",
    hatchDate: null,
}, {
    name: "Biscuit",
    species: "Corgi",
    hatchDate: null,
}];


class App extends Component {
    //state active pets
    constructor(props){
        super(props);
        this.state = JSON.parse(localStorage.getItem("appState")) || {
            firstVisit: true,
            activePet: null
        };
        this.setActivePet = this.setActivePet.bind(this);
        this.resetPet = this.resetPet.bind(this);
        this.syncState = this.syncState.bind(this);
    }

    setActivePet(activePet){
        activePet.hatchDate = new moment().toString();
        let newState = {
            activePet: activePet,
            firstVisit: false
        };

        this.setState(newState, this.syncState);
    }

    syncState() {
        localStorage.setItem("appState", JSON.stringify(this.state))
    }

    resetPet(){
        let newState = {
            activePet: null,
            firstVisit: true,
        };
        localStorage.clear();
        console.log(this.state);
        this.setState(newState, this.syncState);
    }

    render() {
        let {firstVisit, activePet} = this.state;
        return (
            <div className="App">
                { !!firstVisit && <EggContainer pets={PETS} setActivePet={this.setActivePet} /> }
                { !firstVisit && <PetContainer pet={activePet} resetPet={this.resetPet}/> }
            </div>
        );
    }
}

export default App;

// TODO: Squash bug that is making it so stats reset to default on decrase stats
// TODO: Add some media queries