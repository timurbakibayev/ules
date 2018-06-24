import React, {Component} from 'react';
import {Button, Input} from 'reactstrap';
import './calc.css';
import {Slider} from 'reactrangeslider';
import coin from "./coin.png";

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            amount: 50000,
            months: 3,
        }
    }

    render() {
        return (
            <div style={{alignContent: "center", display: "flex", flexFlow: "column"}}>
                <div style={{flexFlow: "row", display: "flex"}}>
                    <div style={{marginRight: "10px"}}>Сумма</div>
                    <Input type="range" handleStyle={stylesCalc.normal}
                            min={20000}
                            max={100000}
                            step={5000}
                            value = {this.state.amount}
                            hoveredHandleStyle={stylesCalc.normal}
                            focusedHandleStyle={stylesCalc.normal} onChange={(e) => {
                        this.setState({amount: e.target.value});
                    }}/>
                </div>
                <div className="amount">{this.state.amount/1000} 000 тенге</div>
                <div style={{flexFlow: "row", display: "flex"}}>
                    <div style={{marginRight: "10px"}}>Срок</div>
                    <Slider handleStyle={stylesCalc.normal}
                            min={20000}
                            max={100000}
                            step={5000}
                            hoveredHandleStyle={stylesCalc.normal}
                            focusedHandleStyle={stylesCalc.normal} onChange={(value) => {
                        this.setState({amount: value})
                    }}/>
                </div>

            </div>
        )
    }
}

let stylesCalc = {
    normal: {
        backgroundColor: "blue",
        backgroundImage: "url(" + coin + ")",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        border: "transparent",
    },
};