import React, {Component} from 'react';
import {Progress, Form, Label, Input, Button, Row, FormGroup, FormText, Col, CustomInput} from 'reactstrap';


export default class Page5 extends Component {
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
            real_estate_owned: localStorage.getItem("real_estate_owned") === 'true',
            car_owned: localStorage.getItem("car_owned") === 'true',
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

                            <FormGroup row>
                                <Label for="busyness_employment_type" sm={2}>Тип занятости</Label>
                                <Col sm={10}>
                                    <Input type="select" name="busyness_employment_type"
                                           id="busyness_employment_type" placeholder="Тип занятости"
                                           value={this.state.busyness_employment_type}
                                           onChange={(e) => {
                                               this.setState({busyness_employment_type: e.target.value});
                                               localStorage.setItem("busyness_employment_type", e.target.value);
                                           }}
                                    >
                                        <option value="Постоянная занятость">Постоянная занятость</option>
                                        <option value="Частичная занятость">Частичная занятость</option>
                                        <option value="Проектная / временная работа">Проектная / временная работа
                                        </option>
                                        <option value="Собственный бизнес">Собственный бизнес</option>
                                        <option value="Индивидуальный предприниматель">Индивидуальный предприниматель
                                        </option>
                                        <option value="Стажировка">Стажировка</option>
                                        <option value="Не работаю">Не работаю</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="busyness_type_of_income" sm={2}>Вид дохода</Label>
                                <Col sm={10}>
                                    <Input type="select" name="busyness_type_of_income"
                                           id="busyness_type_of_income" placeholder="Вид дохода"
                                           value={this.state.busyness_type_of_income}
                                           onChange={(e) => {
                                               this.setState({busyness_type_of_income: e.target.value});
                                               localStorage.setItem("busyness_type_of_income", e.target.value);
                                           }}
                                    >
                                        <option value="Доход по основному месту работы">Доход по основному месту
                                            работы
                                        </option>
                                        <option value="Доход от работы по совместительству">Доход от работы по
                                            совместительству
                                        </option>
                                        <option value="Индивидуальная деятельность">Индивидуальная деятельность</option>
                                        <option value="Доход супруга">Доход супруга</option>
                                        <option value="Сдача недвижимости в аренду">Сдача недвижимости в аренду</option>
                                        <option value="Помощь родственников">Помощь родственников</option>
                                        <option value="Другое">Другое</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="busyness_workplace_name" sm={2}>Название организации</Label>
                                <Col sm={10}>
                                    <Input type="text" name="busyness_workplace_name" id="busyness_workplace_name"
                                           placeholder="Название организации"
                                           value={this.state.busyness_workplace_name}
                                           onChange={(e) => {
                                               this.setState({busyness_workplace_name: e.target.value});
                                               localStorage.setItem("busyness_workplace_name", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="busyness_workplace_phone" sm={2}>Телефон организации</Label>
                                <Col sm={10}>
                                    <Input type="text" name="busyness_workplace_phone" id="busyness_workplace_phone"
                                           placeholder="Телефон организации"
                                           value={this.state.busyness_workplace_phone}
                                           onChange={(e) => {
                                               this.setState({busyness_workplace_phone: e.target.value});
                                               localStorage.setItem("busyness_workplace_phone", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="busyness_identification_number" sm={2}>БИН</Label>
                                <Col sm={10}>
                                    <Input type="text" name="busyness_identification_number"
                                           id="busyness_identification_number" placeholder="БИН"
                                           value={this.state.busyness_identification_number}
                                           onChange={(e) => {
                                               this.setState({busyness_identification_number: e.target.value});
                                               localStorage.setItem("busyness_identification_number", e.target.value);
                                           }}
                                    />
                                </Col>
                            </FormGroup>


                            <FormGroup row>
                                <Label for="busyness_duration_of_employment" sm={2}>Время работы на последнем месте</Label>
                                <Col sm={10}>
                                    <Input type="select" name="busyness_duration_of_employment"
                                           id="busyness_duration_of_employment" placeholder="Вид дохода"
                                           value={this.state.busyness_duration_of_employment}
                                           onChange={(e) => {
                                               this.setState({busyness_duration_of_employment: e.target.value});
                                               localStorage.setItem("busyness_duration_of_employment", e.target.value);
                                           }}
                                    >
                                        <option value=""></option>
                                        <option value="Нет опыта">Нет опыта</option>
                                        <option value="От 1 до 6 месяцев">От 1 до 6 месяцев</option>
                                        <option value="От 6 месяцев до 1 года">От 6 месяцев до 1 года</option>
                                        <option value="От 1 года до 2 лет">От 1 года до 2 лет</option>
                                        <option value="От 2 до 3 лет">От 2 до 3 лет</option>
                                        <option value="От 3 до 4 лет">От 3 до 4 лет</option>
                                        <option value="Более 4 лет">Более 4 лет</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            {/*busyness_work_experience: localStorage.getItem("busyness_work_experience"),*/}
                            {/*busyness_industry_employment: localStorage.getItem("busyness_industry_employment"),*/}


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