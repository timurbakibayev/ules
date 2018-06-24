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

    render() {
        return (
            <div>
                <div style={{marginLeft: "10%", marginRight: "10%"}}>
                    {/*<div className="text-center">Личная информация</div>*/}
                    <Progress multi style={{marginBottom: "20px", marginTop: "10px"}}>
                        <Progress bar animated value="15">Калькулятор</Progress>
                        <Progress bar color="success" max={100} value={30}>Контактные данные</Progress>
                        {/*<Progress bar color="info" value="25">Cool</Progress>*/}
                        {/*<Progress bar color="warning" value="20">20%</Progress>*/}
                        {/*<Progress bar color="danger" value="5">!!</Progress>*/}
                    </Progress>
                    {this.state.pageNo === 0 && <Calculator/>}
                    {this.state.pageNo === 1 && <Page1/>}
                </div>
            </div>
        )
    }
}