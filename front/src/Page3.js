import React, {Component} from 'react';
import {Progress, Form, Label, Input, Button, FormGroup, FormText, Col} from 'reactstrap';

export default class Page2 extends Component {
    constructor() {
        super();
        this.state = {
            home_phone: localStorage.getItem("home_phone"),
            work_phone: localStorage.getItem("work_phone"),
            registration: localStorage.getItem("registration"),
            country: localStorage.getItem("country"),
            postcode: localStorage.getItem("postcode"),
            region_name: localStorage.getItem("region_name"),
            city_name: localStorage.getItem("city_name"),
            street: localStorage.getItem("street"),
            building_number: localStorage.getItem("building_number"),
            apartment_number: localStorage.getItem("apartment_number"),
            period_of_residence: localStorage.getItem("period_of_residence"),
        }
    }

    sendData() {
        this.props.formHandler(this.state, true);
    }

    sendDataBack() {
        this.props.formHandler(this.state, false);
    }

    render() {
        return (
            <div>
                <Form>

                    <FormText>Контактные данные</FormText>

                    <FormGroup row>
                        <Label for="home_phone" sm={2}>Домашний телефон</Label>
                        <Col sm={10}>
                            <Input type="text" name="home_phone"
                                   id="home_phone" placeholder="+7727ххххххх"
                                   value={this.state.home_phone}
                                   onChange={(e)=>{
                                       this.setState({home_phone: e.target.value});
                                       localStorage.setItem("home_phone", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="work_phone" sm={2}>Рабочий телефон</Label>
                        <Col sm={10}>
                            <Input type="text" name="work_phone"
                                   id="home_phone" placeholder="+7727ххххххх"
                                   value={this.state.work_phone}
                                   onChange={(e)=>{
                                       this.setState({work_phone: e.target.value});
                                       localStorage.setItem("work_phone", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormText>Адрес регистрации</FormText>

                    <FormGroup row>
                        <Label for="country" sm={2}>Страна</Label>
                        <Col sm={10}>
                            <Input type="text" name="country"
                                   id="country" placeholder="Страна"
                                   value={this.state.country}
                                   onChange={(e)=>{
                                       this.setState({country: e.target.value});
                                       localStorage.setItem("country", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="postcode" sm={2}>Индекс</Label>
                        <Col sm={10}>
                            <Input type="text" name="postcode"
                                   id="postcode" placeholder="Индекс"
                                   value={this.state.postcode}
                                   onChange={(e)=>{
                                       this.setState({postcode: e.target.value});
                                       localStorage.setItem("postcode", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="region_name1" sm={2}>Область</Label>
                        <Col sm={10}>
                            <Input type="text" name="region_name1"
                                   id="region_name1" placeholder="Область"
                                   value={this.state.region_name1}
                                   onChange={(e)=>{
                                       this.setState({region_name1: e.target.value});
                                       localStorage.setItem("region_name1", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="city_name1" sm={2}>Город</Label>
                        <Col sm={10}>
                            <Input type="text" name="city_name1"
                                   id="city_name1" placeholder="Город"
                                   value={this.state.city_name1}
                                   onChange={(e)=>{
                                       this.setState({city_name1: e.target.value});
                                       localStorage.setItem("city_name1", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="street" sm={2}>Улица</Label>
                        <Col sm={10}>
                            <Input type="text" name="street"
                                   id="street" placeholder="Улица"
                                   value={this.state.street}
                                   onChange={(e)=>{
                                       this.setState({street: e.target.value});
                                       localStorage.setItem("street", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="building_number" sm={2}>Дом</Label>
                        <Col sm={10}>
                            <Input type="text" name="building_number"
                                   id="building_number" placeholder="Номер дома"
                                   value={this.state.building_number}
                                   onChange={(e)=>{
                                       this.setState({building_number: e.target.value});
                                       localStorage.setItem("building_number", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="apartment_number" sm={2}>Квартира</Label>
                        <Col sm={10}>
                            <Input type="text" name="apartment_number"
                                   id="apartment_number" placeholder="Номер квартиры"
                                   value={this.state.apartment_number}
                                   onChange={(e)=>{
                                       this.setState({apartment_number: e.target.value});
                                       localStorage.setItem("apartment_number", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="period_of_residence" sm={2}>Срок проживания</Label>
                        <Col sm={10}>
                            <Input type="text" name="period_of_residence"
                                   id="period_of_residence" placeholder="Срок проживания по данному адресу"
                                   value={this.state.period_of_residence}
                                   onChange={(e)=>{
                                       this.setState({period_of_residence: e.target.value});
                                       localStorage.setItem("period_of_residence", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{size: 10, offset: 2}}>
                            <Button onClick={this.sendDataBack.bind(this)}>Назад</Button> <Button onClick={this.sendData.bind(this)}>Далее</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}