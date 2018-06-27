import React, {Component} from 'react';
import {Progress, Form, Label, Row, Input, Button, FormGroup, FormText, Col} from 'reactstrap';

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
            same_address: localStorage.getItem("same_address"),

            country_: localStorage.getItem("country_"),
            postcode_: localStorage.getItem("postcode_"),
            region_name_: localStorage.getItem("region_name_"),
            city_name_: localStorage.getItem("city_name_"),
            street_: localStorage.getItem("street_"),
            building_number_: localStorage.getItem("building_number_"),
            apartment_number_: localStorage.getItem("apartment_number_"),
            period_of_residence_: localStorage.getItem("period_of_residence_"),


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

                    <FormText style={{margin: "10px"}}>Контактные данные</FormText>

                    <FormGroup row>
                        <Label for="home_phone" sm={2}>Домашний телефон</Label>
                        <Col sm={6}>
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

                    <FormGroup row>
                        <Label for="work_phone" sm={2}>Рабочий телефон</Label>
                        <Col sm={6}>
                            <Input type="text" name="work_phone"
                                   id="home_phone" placeholder="+7727ххххххх"
                                   value={this.state.work_phone}
                                   onChange={(e) => {
                                       this.setState({work_phone: e.target.value});
                                       localStorage.setItem("work_phone", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormText style={{margin: "10px"}}>Адрес регистрации</FormText>
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
                                <Label for="street" sm={2}>Улица</Label>
                                <Col sm={10}>
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
                                <Label for="building_number" sm={2}>Дом</Label>
                                <Col sm={10}>
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
                                <Label for="apartment_number" sm={2}>Квартира</Label>
                                <Col sm={10}>
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
                                <Label for="period_of_residence" sm={2}>Срок проживания</Label>
                                <Col sm={10}>
                                    <Input type="select" name="period_of_residence"
                                           id="period_of_residence" placeholder="Срок проживания по данному адресу"
                                           value={this.state.period_of_residence}
                                           onChange={(e) => {
                                               this.setState({period_of_residence: e.target.value});
                                               localStorage.setItem("period_of_residence", e.target.value);
                                           }}
                                    >
                                        <option value="Менее 1 года">Менее 1 года</option>
                                        <option value="От 1 года до 3 лет">От 1 года до 3 лет</option>
                                        <option value="От 3 лет до 5 лет">От 3 лет до 5 лет</option>
                                        <option value="Более 5 лет">Более 5 лет</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>


                    <FormText style={{margin: "10px"}}>Адрес проживания</FormText>
                    <FormGroup row>
                        <Col xs="12" sm="12">
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="same_address" id="same_address"
                                           checked={this.state.same_address1}
                                           onChange={(e) => {
                                               console.log("Checkbox", e.target.checked);
                                               this.setState({same_address: e.target.checked});
                                               localStorage.setItem("same_address", e.target.checked);
                                           }}
                                    />Адрес проживания совпадает с адресом регистрации
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <div>
                        <Row>
                            <Col xs="6" sm="6">

                                <FormGroup row>
                                    <Label for="country_" sm={2}>Страна</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="country_"
                                               id="country_" placeholder="Страна"
                                               value={this.state.country_}
                                               onChange={(e) => {
                                                   this.setState({country_: e.target.value});
                                                   localStorage.setItem("country_", e.target.value);
                                               }}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="postcode_" sm={2}>Индекс</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="postcode_"
                                               id="postcode_" placeholder="Индекс"
                                               value={this.state.postcode_}
                                               onChange={(e) => {
                                                   this.setState({postcode_: e.target.value});
                                                   localStorage.setItem("postcode_", e.target.value);
                                               }}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="region_name1_" sm={2}>Область</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="region_name1_"
                                               id="region_name1_" placeholder="Область"
                                               value={this.state.region_name1_}
                                               onChange={(e) => {
                                                   this.setState({region_name1_: e.target.value});
                                                   localStorage.setItem("region_name1_", e.target.value);
                                               }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="city_name1_" sm={2}>Город</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="city_name1_"
                                               id="city_name1_" placeholder="Город"
                                               value={this.state.city_name1_}
                                               onChange={(e) => {
                                                   this.setState({city_name1_: e.target.value});
                                                   localStorage.setItem("city_name1_", e.target.value);
                                               }}
                                        />
                                    </Col>
                                </FormGroup>

                            </Col>
                            <Col xs="6" sm="6">
                                <FormGroup row>
                                    <Label for="street_" sm={2}>Улица</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="street_"
                                               id="street_" placeholder="Улица"
                                               value={this.state.street_}
                                               onChange={(e) => {
                                                   this.setState({street_: e.target.value});
                                                   localStorage.setItem("street_", e.target.value);
                                               }}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="building_number_" sm={2}>Дом</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="building_number_"
                                               id="building_number_" placeholder="Номер дома"
                                               value={this.state.building_number_}
                                               onChange={(e) => {
                                                   this.setState({building_number_: e.target.value});
                                                   localStorage.setItem("building_number_", e.target.value);
                                               }}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="apartment_number_" sm={2}>Квартира</Label>
                                    <Col sm={10}>
                                        <Input type="text" name="apartment_number_"
                                               id="apartment_number_" placeholder="Номер квартиры"
                                               value={this.state.apartment_number_}
                                               onChange={(e) => {
                                                   this.setState({apartment_number_: e.target.value});
                                                   localStorage.setItem("apartment_number_", e.target.value);
                                               }}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="period_of_residence_" sm={2}>Срок проживания</Label>
                                    <Col sm={10}>
                                        <Input type="select" name="period_of_residence_"
                                               id="period_of_residence_" placeholder="Срок проживания по данному адресу"
                                               value={this.state.period_of_residence_}
                                               onChange={(e) => {
                                                   this.setState({period_of_residence_: e.target.value});
                                                   localStorage.setItem("period_of_residence_", e.target.value);
                                               }}
                                        >
                                            <option value="Менее 1 года">Менее 1 года</option>
                                            <option value="От 1 года до 3 лет">От 1 года до 3 лет</option>
                                            <option value="От 3 лет до 5 лет">От 3 лет до 5 лет</option>
                                            <option value="Более 5 лет">Более 5 лет</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>

                    <FormGroup check row>
                        <Col sm={{size: 6, offset: 2}}>
                            <Button onClick={this.sendDataBack.bind(this)}>Назад</Button> <Button
                            onClick={this.sendData.bind(this)}>Далее</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}