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

export default class MultiForm extends Component {
    constructor() {
        super();
        this.state = {
            pageNo: 6,
        }
    }

    calculatorDone(thatState) {
        this.setState(thatState);
        console.log("Received", thatState);
        this.setState({pageNo: 1});
    }

    page1Done(thatState, forward) {
        // this.setState(thatState);
        // console.log("Received", thatState);
        this.setState({pageNo: forward?2:0});
    }

    page2Done(thatState, forward) {
        // this.setState(thatState);
        // console.log("Received", thatState);
        this.setState({pageNo: forward?3:1});
    }

    page3Done(thatState, forward) {
        // this.setState(thatState);
        // console.log("Received", thatState);
        this.setState({pageNo: forward?4:2});
    }

    page4Done(thatState, forward) {
        // this.setState(thatState);
        // console.log("Received", thatState);
        this.setState({pageNo: forward?5:3});
    }

    page5Done(thatState, forward) {
        // this.setState(thatState);
        // console.log("Received", thatState);
        this.setState({pageNo: forward?6:4});
    }

    pageSend(thatState, forward) {
        // this.setState(thatState);
        // console.log("Received", thatState);
        this.setState({pageNo: 5});
    }

    async componentDidMount() {
        let t = await loadBanks();
        console.log(t);
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <div style={{display: "flex", flexFlow: "row"}}>
                        <img src={logo} alt="ules" onClick={()=>{this.setState({pageNo: 0})}}/>
                        <div className="text-center" style={{flex: 1, display: "flex", flexFlow: "column"}}>
                            <Progress multi style={{
                                marginBottom: "0px", marginLeft: "20px", marginRight: "20px", marginTop: "auto",
                                height: "35px",

                            }} >
                                <Progress bar animated={this.state.pageNo === 0}
                                                                     value={15} color="success">
                                    <a href="#" onClick={()=>{this.setState({pageNo: 0})}} style={{color:"white"}}>Калькулятор</a></Progress>
                                {this.state.pageNo >= 1 && <Progress bar animated={this.state.pageNo === 1}
                                                                     color="info" max={100}
                                                                     value={15}>
                                    <a href="#" onClick={()=>{this.setState({pageNo: 1})}} style={{color:"white"}}>Личные данные</a>
                                </Progress>}
                                {this.state.pageNo >= 2 && <Progress bar animated={this.state.pageNo === 2}  onClick={()=>{this.setState({pageNo: 2})}}
                                                                     color="info" max={100}
                                                                     value={15}>
                                    <a href="#" onClick={()=>{this.setState({pageNo: 2})}} style={{color:"white"}}>Документы</a></Progress>}
                                {this.state.pageNo >= 3 && <Progress bar animated={this.state.pageNo === 3}
                                                                     color="info" max={100}
                                                                     value={15}>
                                    <a href="#" onClick={()=>{this.setState({pageNo: 3})}} style={{color:"white"}}>Адрес</a></Progress>}
                                {this.state.pageNo >= 4 && <Progress bar animated={this.state.pageNo === 4}
                                                                     color="info" max={100}
                                                                     value={10}>
                                    <a href="#" onClick={()=>{this.setState({pageNo: 4})}} style={{color:"white"}}>Контакты</a></Progress>}
                                {this.state.pageNo >= 5 && <Progress bar animated={this.state.pageNo === 5}
                                                                     color="info" max={100}
                                                                     value={10}>
                                    <a href="#" onClick={()=>{this.setState({pageNo: 5})}} style={{color:"white"}}>Занятость</a>
                                </Progress>}
                                {this.state.pageNo >= 6 && <Progress bar animated={this.state.pageNo === 6}
                                                                     color="info" max={100}
                                                                     value={20}>
                                    <a href="#" onClick={()=>{this.setState({pageNo: 6})}} style={{color:"white"}}>Подача заявления</a>
                                </Progress>}
                            </Progress>
                        </div>
                    </div>
                </header>
                <div style={{marginLeft: "10%", marginRight: "10%", marginBottom: "30px"}}>
                    {/*<div className="text-center">Личная информация</div>*/}
                    {this.state.pageNo === 0 && <Calculator formHandler={this.calculatorDone.bind(this)}/>}
                    {this.state.pageNo === 1 && this.state && <Page1 formHandler={this.page1Done.bind(this)} saved={this.state}/>}
                    {this.state.pageNo === 2 && <Page2 formHandler={this.page2Done.bind(this)}/>}
                    {this.state.pageNo === 3 && <Page3 formHandler={this.page3Done.bind(this)}/>}
                    {this.state.pageNo === 4 && <Page4 formHandler={this.page4Done.bind(this)}/>}
                    {this.state.pageNo === 5 && <Page5 formHandler={this.page5Done.bind(this)}/>}
                    {this.state.pageNo === 6 && <PageSend formHandler={this.pageSend.bind(this)}/>}
                </div>
            </div>
        )
    }
}