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

export default class Page3 extends Component {
    constructor() {
        super();
        this.state = {
            c1name: localStorage.getItem("c1name"),
            c1surname: localStorage.getItem("c1surname"),
            c1patronymic: localStorage.getItem("c1patronymic"),
            c1city_name: localStorage.getItem("c1city_name"),
            c1degree_of_relationship: localStorage.getItem("c1degree_of_relationship"),
            c1mobile_phone: localStorage.getItem("c1mobile_phone"),
            c1work_phone: localStorage.getItem("c1work_phone"),
            c1home_phone: localStorage.getItem("c1home_phone"),
            c1personal_identification_number: localStorage.getItem("c1personal_identification_number"),

            c2name: localStorage.getItem("c2name"),
            c2surname: localStorage.getItem("c2surname"),
            c2patronymic: localStorage.getItem("c2patronymic"),
            c2city_name: localStorage.getItem("c2city_name"),
            c2degree_of_relationship: localStorage.getItem("c2degree_of_relationship"),
            c2mobile_phone: localStorage.getItem("c2mobile_phone"),
            c2work_phone: localStorage.getItem("c2work_phone"),
            c2home_phone: localStorage.getItem("c2home_phone"),
            c2personal_identification_number: localStorage.getItem("c2personal_identification_number"),

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
                                <Label for="c1degree_of_relationship" sm={3}>Степень отношения</Label>
                                <Col sm={9}>
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
                                <Label for="c1name" sm={3}>Имя</Label>
                                <Col sm={9}>
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
                                <Label for="c1mobile_phone" sm={3}>Телефон</Label>
                                <Col sm={9}>
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
                        </Col>
                        <Col xs="6" sm="6">
                            <FormText style={{margin: "10px"}}>Контактное лицо 2</FormText>
                            <FormGroup row>
                                <Label for="c2degree_of_relationship" sm={3}>Степень отношения</Label>
                                <Col sm={9}>
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
                                <Label for="c2name" sm={3}>Имя</Label>
                                <Col sm={9}>
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
                                <Label for="c2mobile_phone" sm={3}>Телефон</Label>
                                <Col sm={9}>
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