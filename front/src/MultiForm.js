import React, {Component} from 'react';
import {Progress, Form, Label, Input, Button, FormGroup, FormText, Col} from 'reactstrap';
import Page1 from './Page1';
import Page2 from './Page2';
import Calculator from "./Calculator";
import {loadBanks} from "./api/banks";

export default class MultiForm extends Component {
    constructor() {
        super();
        this.state = {
            pageNo: 2,
        }
    }

    calculatorDone(thatState) {
        this.setState(thatState);
        console.log("Received", thatState);
        this.setState({pageNo: 1});
    }

    page1Done(thatState) {
        // this.setState(thatState);
        // console.log("Received", thatState);
        this.setState({pageNo: 2});
    }

    page2Done(thatState) {
        // this.setState(thatState);
        // console.log("Received", thatState);
        this.setState({pageNo: 0});
    }

    async componentDidMount() {
        let t = await loadBanks();
        console.log(t);
    }

    render() {
        return (
            <div>
                <div style={{marginLeft: "10%", marginRight: "10%"}}>
                    {/*<div className="text-center">Личная информация</div>*/}
                    {this.state.pageNo === 0 && <Calculator formHandler={this.calculatorDone.bind(this)}/>}
                    {this.state.pageNo === 1 && <Page1 formHandler={this.page1Done.bind(this)}/>}
                    {this.state.pageNo === 2 && <Page2 formHandler={this.page2Done.bind(this)}/>}
                </div>
            </div>
        )
    }
}