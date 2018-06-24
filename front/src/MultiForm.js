import React, {Component} from 'react';
import {Progress, Form, Label, Input, Button, FormGroup, FormText, Col} from 'reactstrap';
import Page1 from './Page1';
import Calculator from "./Calculator";

export default class MultiForm extends Component {
    constructor() {
        super();
        this.state = {
            pageNo: 0,

        }
    }

    calculatorDone(thatState) {
        this.setState(thatState);
        console.log("Received", thatState);
        this.setState({pageNo: 1});
    }

    render() {
        return (
            <div>
                <div style={{marginLeft: "10%", marginRight: "10%"}}>
                    {/*<div className="text-center">Личная информация</div>*/}
                    {this.state.pageNo === 0 && <Calculator formHandler={this.calculatorDone.bind(this)}/>}
                    {this.state.pageNo === 1 && <Page1/>}
                </div>
            </div>
        )
    }
}