import React, {Component} from 'react';
import {Progress, Form, Label, Input, Button, FormGroup, FormText, Col} from 'reactstrap';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import PageSend from './PageSend';
import Calculator from "./Calculator";
import {loadBanks} from "./api/banks";
import logo from './logo.png';
import {Motion, spring} from 'react-motion';

export default class MultiForm extends Component {
    constructor() {
        super();
        this.state = {
            pageNo: 6,
            fromX: -1000,
            toX: 0,
            banks: [],
        }
    }

    goRight() {
        this.setState({fromX: 0, toX: 1500});
    }

    calculatorDone(thatState) {
        this.goRight();
        this.setState(thatState);
        console.log("Received", thatState);
        // this.setState({pageNo: 1});
    }

    pageDone(thatState, forward) {
        this.setState({
            fromX: 0,
            toX: forward?-1500:1500,
        });
        setTimeout(()=> {
            console.log("timed out");
            this.setState({
                pageNo: forward ? this.state.pageNo+1 : this.state.pageNo-1,
                fromX: forward?1500:-1500,
                toX: 0,
            });
            this.setState({});
        }, 500);

    }


    async componentDidMount() {
        let t = await loadBanks();
        this.setState({banks: t});
        console.log(t);
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <div style={{display: "flex", flexFlow: "row"}}>
                        <img src={logo} alt="ules" onClick={() => {
                            this.setState({pageNo: 0})
                        }}/>
                        <div className="text-center" style={{flex: 1, display: "flex", flexFlow: "column"}}>
                            <Progress multi style={{
                                marginBottom: "0px", marginLeft: "20px", marginRight: "20px", marginTop: "auto",
                                height: "35px",
                            }}>
                                <Progress bar animated={this.state.pageNo === 0}
                                          value={15} color="success">
                                    <a href="#" onClick={() => {
                                        this.setState({pageNo: 0})
                                    }} style={{color: "white"}}>Калькулятор</a></Progress>
                                {this.state.pageNo >= 1 && <Progress bar animated={this.state.pageNo === 1}
                                                                     color="info" max={100}
                                                                     value={15}>
                                    <a href="#" onClick={() => {
                                        this.setState({pageNo: 1})
                                    }} style={{color: "white"}}>Начало</a>
                                </Progress>}
                                {this.state.pageNo >= 2 &&
                                <Progress bar animated={this.state.pageNo === 2} onClick={() => {
                                    this.setState({pageNo: 2})
                                }}
                                          color="info" max={100}
                                          value={15}>
                                    <a href="#" onClick={() => {
                                        this.setState({pageNo: 2})
                                    }} style={{color: "white"}}>Паспортные данные</a></Progress>}
                                {this.state.pageNo >= 3 && <Progress bar animated={this.state.pageNo === 3}
                                                                     color="info" max={100}
                                                                     value={15}>
                                    <a href="#" onClick={() => {
                                        this.setState({pageNo: 3})
                                    }} style={{color: "white"}}>Контакты</a></Progress>}
                                {this.state.pageNo >= 4 && <Progress bar animated={this.state.pageNo === 4}
                                                                     color="info" max={100}
                                                                     value={10}>
                                    <a href="#" onClick={() => {
                                        this.setState({pageNo: 4})
                                    }} style={{color: "white"}}>Бизнес</a></Progress>}
                                {this.state.pageNo >= 5 && <Progress bar animated={this.state.pageNo === 5}
                                                                     color="info" max={100}
                                                                     value={10}>
                                    <a href="#" onClick={() => {
                                        this.setState({pageNo: 5})
                                    }} style={{color: "white"}}>Адрес</a>
                                </Progress>}
                                {this.state.pageNo >= 6 && <Progress bar animated={this.state.pageNo === 6}
                                                                     color="info" max={100}
                                                                     value={20}>
                                    <a href="#" onClick={() => {
                                        this.setState({pageNo: 6})
                                    }} style={{color: "white"}}>Подача заявления</a>
                                </Progress>}
                            </Progress>
                        </div>
                    </div>
                </header>
                <Motion defaultStyle={{x: this.state.fromX}} style={{x: spring(this.state.toX)}} key={this.state.pageNo}>
                    {({x}) =>
                        <div style={{
                            zoom: 0.8,
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10%",
                            marginRight: "10%",
                            WebkitTransform: `translate3d(${x}px, 0, 0)`,
                            transform: `translate3d(${x}px, 0, 0)`,
                            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                            padding: "20px",
                            borderRadius: "15px",
                            backgroundColor: "white",
                        }}>
                            {/*<div className="text-center">Личная информация</div>*/}
                            {this.state.pageNo === 0 && <Calculator formHandler={this.pageDone.bind(this)}/>}
                            {this.state.pageNo === 1 && <Page1 formHandler={this.pageDone.bind(this)}/>}
                            {this.state.pageNo === 2 && <Page2 formHandler={this.pageDone.bind(this)}/>}
                            {this.state.pageNo === 3 && <Page3 formHandler={this.pageDone.bind(this)}/>}
                            {this.state.pageNo === 4 && <Page4 formHandler={this.pageDone.bind(this)} banks={this.state.banks}/>}
                            {this.state.pageNo === 5 && <Page5 formHandler={this.pageDone.bind(this)}/>}
                            {this.state.pageNo === 6 && <PageSend formHandler={this.pageDone.bind(this)}/>}
                        </div>
                    }
                </Motion>
            </div>
        )
    }
}