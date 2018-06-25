import React, {Component} from 'react';
import {Button, Input} from 'reactstrap';
import './calc.css';
import {Slider} from 'reactrangeslider';
import coin from "./coin.png";
import logo from './logo.png';

let minRate = 0.123;
let maxRate = 2;
let defaultDays = 30;
let defaultAmount = 50000;

export default class Calculator extends Component {
    constructor() {
        super();
        let theAmount = localStorage.getItem("amount")?parseInt(localStorage.getItem("amount"),10):defaultAmount;
        let theDays = localStorage.getItem("days")?parseInt(localStorage.getItem("days"),10):defaultDays;
        this.state = {
            amount: theAmount,
            days: theDays,
            totalMin: calcTotal(theAmount, theDays, minRate),
            totalMax: calcTotal(theAmount, theDays, maxRate),
            toDate: new Date(Date.now() + (theDays * 24 * 60 * 60 * 1000)),
        }
    }

    daysText(days) {
        if ((days%100 >= 11) && (days%100 <= 15))
            return "дней";

        let k = days % 10;
        return {
            0: "дней",
            1: "день",
            2: "дня",
            3: "дня",
            4: "дня",
            5: "дней",
            6: "дней",
            7: "дней",
            8: "дней",
            9: "дней",
        }[k]
    }

    continue() {
        this.props.formHandler(this.state);
    }

    render() {
        return (
            <div style={{display: "flex", flexFlow: "row"}}>
                <div style={{alignContent: "center", flex: 0.7, padding: "10px", display: "flex", flexFlow: "column"}}>
                    <div style={{flexFlow: "row", display: "flex"}}>
                        <div style={{marginRight: "10px"}}></div>
                        <Input type="range"
                               min={20000}
                               max={100000}
                               step={5000}
                               value={this.state.amount}
                                onChange={(e) => {
                            let amount = parseInt(e.target.value,10);
                            this.setState({
                                amount: amount / 1,
                                totalMin: calcTotal(amount / 1, this.state.days, minRate),
                                totalMax: calcTotal(amount / 1, this.state.days, maxRate),
                            });
                            localStorage.setItem("amount", amount / 1)
                        }}/>
                    </div>
                    <div className="amount">{this.state.amount / 1000} 000 тенге</div>
                    <div style={{flexFlow: "row", display: "flex"}}>
                        <div style={{marginRight: "10px"}}></div>
                        <Input type="range"
                               min={14}
                               max={90}
                               step={1}
                               value={this.state.days} onChange={(e) => {
                            this.setState({
                                days: e.target.value,
                                totalMin: calcTotal(this.state.amount, e.target.value, minRate),
                                totalMax: calcTotal(this.state.amount, e.target.value, maxRate),
                            });
                            localStorage.setItem("days", e.target.value)
                            this.setState({toDate: new Date(Date.now() + (e.target.value * 24 * 60 * 60 * 1000))});
                        }}/>
                    </div>
                    <div className="amount">{this.state.days} {this.daysText(this.state.days)}</div>
                    <div className="amount">до {this.state.toDate.getDate()} {month[this.state.toDate.getMonth()]}</div>
                </div>
                <div className="note" style={{
                    alignContent: "center",
                    borderLeftStyle: "dashed",
                    borderLeftColor: "gray",
                    flex: 0.3, display: "flex", flexFlow: "column", justifyContent: "center"
                }}>
                    <div style={{width: "100%", padding: "2em"}}>
                        <img src={logo} width="80px" style={{marginBottom: "1em"}}/>
                    </div>
                    <table className="calculated" style={{display: "table"}}>
                        <tbody>
                        <tr>
                            <td style={{textAlign: "left", paddingLeft: "0.5em"}}>Сумма</td>
                            <td style={{
                                textAlign: "right",
                                float: "right",
                                paddingRight: "0.5em"
                            }}>{this.state.amount / 1000} 000
                            </td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "left", paddingLeft: "0.5em"}}>Срок дней</td>
                            <td style={{
                                textAlign: "right",
                                float: "right",
                                paddingRight: "0.5em"
                            }}>{this.state.days}</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "left", paddingLeft: "0.5em"}}>Дата погашения</td>
                            <td style={{textAlign: "right", float: "right", paddingRight: "0.5em"}}>{
                                this.state.toDate.getDate() < 10 ? "0" + this.state.toDate.getDate() : this.state.toDate.getDate()
                            }/{
                                this.state.toDate.getMonth() < 9 ? "0" + (this.state.toDate.getMonth() + 1) : this.state.toDate.getMonth() + 1
                            }</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "left", paddingLeft: "0.5em"}}>---------------------------</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "left", paddingLeft: "0.5em"}}>Сумма возврата:</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "right"}}>от</td>
                            <td style={{
                                textAlign: "right",
                                float: "right",
                                paddingRight: "0.5em"
                            }}>{three(this.state.totalMin)}</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "right"}}>до</td>
                            <td style={{
                                textAlign: "right",
                                float: "right",
                                paddingRight: "0.5em"
                            }}>{three(this.state.totalMax)}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div style={{
                        width: "100%", backgroundColor: "#a2dbf1", flex: 1,
                        display: "flex", flexFlow: "column", justifyContent: "center"
                    }}
                         onClick={this.continue.bind(this)}>
                        <p>Продолжить</p>
                    </div>
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

let month = {
    0: "января",
    1: "февраля",
    2: "марта",
    3: "апреля",
    4: "мая",
    5: "июня",
    6: "июля",
    7: "августа",
    8: "сентября",
    9: "октября",
    10: "ноября",
    11: "декабря",
};

let calcTotal = (sum, term, interestRatePerDay) => {
    return Math.round(sum + sum * (term * interestRatePerDay) / 100);
};

let three = (someAmount) => {
    let s = "" + someAmount;
    let where = s.length - 3;
    return s.substring(0, where) + " " + s.substring(where, 20);
};