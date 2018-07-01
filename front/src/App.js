import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import {Button, FormText} from 'reactstrap';
import MultiForm from './MultiForm';
import LandingPage from './LandingPage';

class App extends Component {
    constructor() {
        super();
        this.state={showForm: false, startPage: 6};
    }
    switcher() {
        this.setState({showForm: true})
    }
    switcherDirect() {
        this.setState({showForm: true, startPage: 1})
    }
    render() {
        return (
            <div className="App">
                {!this.state.showForm && <LandingPage  switcher={this.switcher.bind(this)} switcherDirect={this.switcherDirect.bind(this)}/>}
                {this.state.showForm && <MultiForm startPage={this.state.startPage}/>}
            </div>
        );
    }
}

export default App;
