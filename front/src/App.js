import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import {Button, FormText} from 'reactstrap';
import MultiForm from './MultiForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MultiForm/>
            </div>
        );
    }
}

export default App;
