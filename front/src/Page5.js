import React, {Component} from 'react';
import {Progress, Form, Label, Row, Input, Button, FormGroup, FormText, Col} from 'reactstrap';

export default class Page5 extends Component {
    constructor() {
        super();
        this.state = {
            home_phone: localStorage.getItem("home_phone"),
            work_phone: localStorage.getItem("work_phone"),
            registration: localStorage.getItem("registration"),
            country: localStorage.getItem("country"),
            postcode: localStorage.getItem("postcode"),
            region_name1: localStorage.getItem("region_name1"),
            city_name1: localStorage.getItem("city_name1"),
            street: localStorage.getItem("street"),
            building_number: localStorage.getItem("building_number"),
            apartment_number: localStorage.getItem("apartment_number"),
            period_of_residence: localStorage.getItem("period_of_residence"),
            same_address: localStorage.getItem("same_address")==='true',

            country_: localStorage.getItem("country_"),
            postcode_: localStorage.getItem("postcode_"),
            region_name1_: localStorage.getItem("region_name1_"),
            city_name1_: localStorage.getItem("city_name1_"),
            street_: localStorage.getItem("street_"),
            building_number_: localStorage.getItem("building_number_"),
            apartment_number_: localStorage.getItem("apartment_number_"),
            period_of_residence_: localStorage.getItem("period_of_residence_"),
        };
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
                    <FormText style={{margin: "10px"}}>Адрес регистрации бизнеса</FormText>
                    <Row>
                        <Col xs="6" sm="6">
                            <FormGroup row>
                                <Label for="country" sm={2}>Страна</Label>
                                <Col sm={10}>
                                    <Input type="text" name="country"
                                           id="country" placeholder="Страна"
                                           value={this.state.country}
                                           onChange={(e) => {
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
                                           onChange={(e) => {
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
                                           onChange={(e) => {
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
                                           onChange={(e) => {
                                               this.setState({city_name1: e.target.value});
                                               localStorage.setItem("city_name1", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>

                        </Col>
                        <Col xs="6" sm="6">
                            <FormGroup row>
                                <Label for="street" sm={3}>Улица</Label>
                                <Col sm={9}>
                                    <Input type="text" name="street"
                                           id="street" placeholder="Улица"
                                           value={this.state.street}
                                           onChange={(e) => {
                                               this.setState({street: e.target.value});
                                               localStorage.setItem("street", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="building_number" sm={3}>Дом</Label>
                                <Col sm={9}>
                                    <Input type="text" name="building_number"
                                           id="building_number" placeholder="Номер дома"
                                           value={this.state.building_number}
                                           onChange={(e) => {
                                               this.setState({building_number: e.target.value});
                                               localStorage.setItem("building_number", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="apartment_number" sm={3}>Квартира</Label>
                                <Col sm={9}>
                                    <Input type="text" name="apartment_number"
                                           id="apartment_number" placeholder="Номер квартиры"
                                           value={this.state.apartment_number}
                                           onChange={(e) => {
                                               this.setState({apartment_number: e.target.value});
                                               localStorage.setItem("apartment_number", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="home_phone" sm={3}>Домашний телефон</Label>
                                <Col sm={9}>
                                    <Input type="text" name="home_phone"
                                           id="home_phone" placeholder="+7727ххххххх"
                                           value={this.state.home_phone}
                                           onChange={(e) => {
                                               this.setState({home_phone: e.target.value});
                                               localStorage.setItem("home_phone", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup check row>
                        <Col sm={{size: 12}}>
                            <Button onClick={this.sendDataBack.bind(this)}>Назад</Button> <Button
                            onClick={this.sendData.bind(this)}>Далее</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}