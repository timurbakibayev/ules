import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import {Button, FormText} from 'reactstrap';
import MultiForm from './MultiForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div style={{display: "flex", flexFlow: "row"}}>
                        <img src={logo} alt="ules"/>
                        <div className="text-center" style={{flex: 1}}> Равноправное кредитование
                        </div>
                    </div>
                </header>
                <MultiForm/>
            </div>
        );
    }
}

export default App;
