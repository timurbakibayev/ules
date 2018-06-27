import React, {Component} from 'react';
import {Progress, Form, Label, Input, Button, Row, FormGroup, FormText, Col, CustomInput} from 'reactstrap';

//name,
// surname,
// patronymic,
// email,
// mobile_phone,
// identity_card_back_file_name,
// identity_card_file_name,
// user_photo_file_name

export default class Page4 extends Component {
    constructor() {
        super();
        this.state = {

            busyness_employment_type: localStorage.getItem("busyness_employment_type"),
            busyness_type_of_income: localStorage.getItem("busyness_type_of_income"),
            busyness_workplace_name: localStorage.getItem("busyness_workplace_name"),
            busyness_workplace_phone: localStorage.getItem("busyness_workplace_phone"),
            busyness_identification_number: localStorage.getItem("busyness_identification_number"),
            busyness_duration_of_employment: localStorage.getItem("busyness_duration_of_employment"),
            busyness_work_experience: localStorage.getItem("busyness_work_experience"),
            busyness_industry_employment: localStorage.getItem("busyness_industry_employment"),
            busyness_position: localStorage.getItem("busyness_position"),
            busyness_income_per_month: localStorage.getItem("busyness_income_per_month"),
            busyness_regularity_of_income: localStorage.getItem("busyness_regularity_of_income"),
            busyness_income_expected_date: localStorage.getItem("busyness_income_expected_date"),
            busyness_income_amount_last_month: localStorage.getItem("busyness_income_amount_last_month"),
            busyness_income_amount_last_six_month: localStorage.getItem("busyness_income_amount_last_six_month"),
            real_estate_owned:localStorage.getItem("real_estate_owned") ==='true',
            car_owned: localStorage.getItem("car_owned") ==='true',
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

                    <Row>
                        <Col xs="6" sm="6">

                            <FormText style={{margin: "10px"}}>Контактное лицо 1</FormText>
                            <FormGroup row>
                                <Label for="c1surname" sm={2}>Фамилия</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c1surname" id="c1surname" placeholder="Фамилия"
                                           value={this.state.c1surname}
                                           onChange={(e) => {
                                               this.setState({c1surname: e.target.value});
                                               localStorage.setItem("c1surname", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c1name" sm={2}>Имя</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c1name" id="c1name" placeholder="Имя"
                                           value={this.state.c1name}
                                           onChange={(e) => {
                                               this.setState({c1name: e.target.value});
                                               localStorage.setItem("c1name", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c1patronymic" sm={2}>Отчество</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c1patronymic" id="c1patronymic" placeholder="Отчество"
                                           value={this.state.c1patronymic}
                                           onChange={(e) => {
                                               this.setState({c1patronymic: e.target.value});
                                               localStorage.setItem("c1patronymic", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c1degree_of_relationship" sm={2}>Степень отношения</Label>
                                <Col sm={10}>
                                    <Input type="select" name="c1degree_of_relationship"
                                           id="c1degree_of_relationship" placeholder="Степень отношения"
                                           value={this.state.c1degree_of_relationship}
                                           onChange={(e) => {
                                               this.setState({c1degree_of_relationship: e.target.value});
                                               localStorage.setItem("c1degree_of_relationship", e.target.value);
                                           }}
                                    >
                                        <option value="Родитель" selected="selected">Родитель</option>
                                        <option value="Брат/сестра">Брат/сестра</option>
                                        <option value="Родственник">Родственник</option>
                                        <option value="Супруг/супруга">Супруг/супруга</option>
                                        <option value="Сын/дочь">Сын/дочь</option>
                                        <option value="Коллега">Коллега</option>
                                        <option value="Друзья">Друзья</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c1city_name" sm={2}>Населённый пункт</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c1city_name" id="c1city_name"
                                           placeholder="Населённый пункт"
                                           value={this.state.c1city_name}
                                           onChange={(e) => {
                                               this.setState({c1city_name: e.target.value});
                                               localStorage.setItem("c1city_name", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c1mobile_phone" sm={2}>Мобильный телефон</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c1mobile_phone" id="c1mobile_phone"
                                           placeholder="+77021112233"
                                           value={this.state.c1mobile_phone}
                                           onChange={(e) => {
                                               this.setState({c1mobile_phone: e.target.value});
                                               localStorage.setItem("c1mobile_phone", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c1home_phone" sm={2}>Домашний телефон</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c1home_phone" id="c1home_phone" placeholder="+7727......"
                                           value={this.state.c1home_phone}
                                           onChange={(e) => {
                                               this.setState({c1home_phone: e.target.value});
                                               localStorage.setItem("c1home_phone", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c1work_phone" sm={2}>Рабочий телефон</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c1work_phone" id="c1work_phone" placeholder="+7727......."
                                           value={this.state.c1work_phone}
                                           onChange={(e) => {
                                               this.setState({c1work_phone: e.target.value});
                                               localStorage.setItem("c1work_phone", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c1personal_identification_number" sm={2}>ИИН</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c1personal_identification_number"
                                           id="c1personal_identification_number"
                                           placeholder="+7727......."
                                           value={this.state.c1personal_identification_number}
                                           onChange={(e) => {
                                               this.setState({c1personal_identification_number: e.target.value});
                                               localStorage.setItem("c1personal_identification_number", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="6">
                            <FormText style={{margin: "10px"}}>Контактное лицо 2</FormText>
                            <FormGroup row>
                                <Label for="c2surname" sm={2}>Фамилия</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c2surname" id="c2surname" placeholder="Фамилия"
                                           value={this.state.c2surname}
                                           onChange={(e) => {
                                               this.setState({c2surname: e.target.value});
                                               localStorage.setItem("c2surname", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c2name" sm={2}>Имя</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c2name" id="c2name" placeholder="Имя"
                                           value={this.state.c2name}
                                           onChange={(e) => {
                                               this.setState({c2name: e.target.value});
                                               localStorage.setItem("c2name", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c2patronymic" sm={2}>Отчество</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c2patronymic" id="c2patronymic" placeholder="Отчество"
                                           value={this.state.c2patronymic}
                                           onChange={(e) => {
                                               this.setState({c2patronymic: e.target.value});
                                               localStorage.setItem("c2patronymic", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c2degree_of_relationship" sm={2}>Степень отношения</Label>
                                <Col sm={10}>
                                    <Input type="select" name="c2degree_of_relationship"
                                           id="c2degree_of_relationship" placeholder="Степень отношения"
                                           value={this.state.c2degree_of_relationship}
                                           onChange={(e) => {
                                               this.setState({c2degree_of_relationship: e.target.value});
                                               localStorage.setItem("c2degree_of_relationship", e.target.value);
                                           }}
                                    >
                                        <option value="Родитель" selected="selected">Родитель</option>
                                        <option value="Брат/сестра">Брат/сестра</option>
                                        <option value="Родственник">Родственник</option>
                                        <option value="Супруг/супруга">Супруг/супруга</option>
                                        <option value="Сын/дочь">Сын/дочь</option>
                                        <option value="Коллега">Коллега</option>
                                        <option value="Друзья">Друзья</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c2city_name" sm={2}>Населённый пункт</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c2city_name" id="c2city_name"
                                           placeholder="Населённый пункт"
                                           value={this.state.c2city_name}
                                           onChange={(e) => {
                                               this.setState({c2city_name: e.target.value});
                                               localStorage.setItem("c2city_name", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c2mobile_phone" sm={2}>Мобильный телефон</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c2mobile_phone" id="c2mobile_phone"
                                           placeholder="+77021112233"
                                           value={this.state.c2mobile_phone}
                                           onChange={(e) => {
                                               this.setState({c2mobile_phone: e.target.value});
                                               localStorage.setItem("c2mobile_phone", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c2home_phone" sm={2}>Домашний телефон</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c2home_phone" id="c2home_phone" placeholder="+7727......"
                                           value={this.state.c2home_phone}
                                           onChange={(e) => {
                                               this.setState({c2home_phone: e.target.value});
                                               localStorage.setItem("c2home_phone", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c2work_phone" sm={2}>Рабочий телефон</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c2work_phone" id="c2work_phone" placeholder="+7727......."
                                           value={this.state.c2work_phone}
                                           onChange={(e) => {
                                               this.setState({c2work_phone: e.target.value});
                                               localStorage.setItem("c2work_phone", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="c2personal_identification_number" sm={2}>ИИН</Label>
                                <Col sm={10}>
                                    <Input type="text" name="c2personal_identification_number"
                                           id="c2personal_identification_number"
                                           placeholder="+7727......."
                                           value={this.state.c2personal_identification_number}
                                           onChange={(e) => {
                                               this.setState({c2personal_identification_number: e.target.value});
                                               localStorage.setItem("c2personal_identification_number", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>

                        </Col>
                    </Row>


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