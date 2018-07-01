import React, {Component} from 'react';
import {Progress, Form, Label, CustomInput, Row, Input, Button, FormGroup, FormText, Col} from 'reactstrap';

//name,
// surname,
// patronymic,
// email,
// mobile_phone,
// identity_card_back_file_name,
// identity_card_file_name,
// user_photo_file_name

export default class Page2 extends Component {
    constructor() {
        super();
        this.state = {
            gender: localStorage.getItem("gender"),
            birthday: localStorage.getItem("birthday"),
            marital_status: localStorage.getItem("marital_status"),
            identity_card_personal_identification_number: localStorage.getItem("identity_card_personal_identification_number"),
            identity_card_number: localStorage.getItem("identity_card_number"),
            identity_card_date_of_issuing: localStorage.getItem("identity_card_date_of_issuing"),
            identity_card_validity: localStorage.getItem("identity_card_validity"),
            identity_card_issuing_authority: localStorage.getItem("identity_card_issuing_authority"),
            identity_card_birthplace: localStorage.getItem("identity_card_birthplace"),
            city_type: localStorage.getItem("city_type"),
            city_name: localStorage.getItem("city_name"),
            region_name: localStorage.getItem("region_name"),
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
                        <Label for="gender" sm={5}>Пол</Label>
                        <Col sm={7}>
                            <Input type="select" name="gender" id="gender"
                                   value={this.state.gender}
                                   onChange={(e)=>{
                                       this.setState({gender: e.target.value});
                                       localStorage.setItem("gender", e.target.value);
                                   }}
                            >
                                <option value={""}></option>
                                <option value={"Муж"}>Мужской</option>
                                <option value={"Жен"}>Женский</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="birthday" sm={5}>Дата рождения</Label>
                        <Col sm={7}>
                            <Input type="date" name="birthday" id="birthday"
                                   value={this.state.birthday}
                                   onChange={(e)=>{
                                       this.setState({birthday: e.target.value});
                                       localStorage.setItem("birthday", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="identity_card_personal_identification_number" sm={5}>ИИН</Label>
                        <Col sm={7}>
                            <Input type="text" name="identity_card_personal_identification_number"
                                   id="identity_card_personal_identification_number" placeholder="ИИН"
                                   value={this.state.identity_card_personal_identification_number}
                                   onChange={(e)=>{
                                       this.setState({identity_card_personal_identification_number: e.target.value});
                                       localStorage.setItem("identity_card_personal_identification_number", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>
                        </Col>
                        <Col xs="6" sm="6">
                    <FormGroup row>
                        <Label for="identity_card_number" sm={5}>Уд.л.</Label>
                        <Col sm={7}>
                            <Input type="text" name="identity_card_number" id="identity_card_number" placeholder="Номер удостоверения личности"
                                   value={this.state.identity_card_number}
                                   onChange={(e)=>{
                                       this.setState({identity_card_number: e.target.value});
                                       localStorage.setItem("identity_card_number", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="identity_card_date_of_issuing" sm={5}>Дата выдачи</Label>
                        <Col sm={7}>
                            <Input type="date" name="identity_card_date_of_issuing" id="identity_card_date_of_issuing"
                                   value={this.state.identity_card_date_of_issuing}
                                   onChange={(e)=>{
                                       this.setState({identity_card_date_of_issuing: e.target.value});
                                       localStorage.setItem("identity_card_date_of_issuing", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="identity_card_issuing_authority" sm={5}>Выдано</Label>
                        <Col sm={7}>
                            <Input type="select" name="identity_card_issuing_authority" id="identity_card_issuing_authority"
                                   value={this.state.identity_card_issuing_authority}
                                   onChange={(e)=>{
                                       this.setState({identity_card_issuing_authority: e.target.value});
                                       localStorage.setItem("identity_card_issuing_authority", e.target.value);
                                   }}
                            >
                                <option value={""}></option>
                                <option value={"МВД РК"}>МВД РК</option>
                                <option value={"МЮ РК"}>МЮ РК</option>
                            </Input>
                        </Col>
                    </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup row>
                        <Label for="marital_status" sm={3}>Семейное положение</Label>
                        <Col sm={9}>
                            <Input type="select" name="marital_status"
                                   id="marital_status"
                                   value={this.state.marital_status}
                                   onChange={(e) => {
                                       this.setState({marital_status: e.target.value});
                                       localStorage.setItem("marital_status", e.target.value);
                                   }}
                            >
                                <option value={localStorage.getItem("gender") === "Жен"?"Не замужем":"Не женат"}>{localStorage.getItem("gender") === "Жен"?"Не замужем":"Не женат"}</option>
                                <option value={localStorage.getItem("gender") === "Жен"?"Замужем":"Женат"}>{localStorage.getItem("gender") === "Жен"?"Замужем":"Женат"}</option>
                                <option value={localStorage.getItem("gender") === "Жен"?"Вдова":"Вдовец"}>{localStorage.getItem("gender") === "Жен"?"Вдова":"Вдовец"}</option>
                                <option value={localStorage.getItem("gender") === "Жен"?"Разведена":"Разведен"}>{localStorage.getItem("gender") === "Жен"?"Разведена":"Разведен"}</option>
                                <option value="Гражданский брак">Гражданский брак</option>
                            </Input>
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