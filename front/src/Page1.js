import React, {Component} from 'react';
import {Progress, Form, Label, Input, Button, FormGroup, FormText, Col} from 'reactstrap';

//name,
// surname,
// patronymic,
// email,
// mobile_phone,
// identity_card_back_file_name,
// identity_card_file_name,
// user_photo_file_name

export default class Page1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            surname: "",
            email: "",
            mobile_phone: "",
            identity_card_back_file_name: "",
            identity_card_file_name: "",
            user_photo_file_name: "",
        }
    }
    sendData() {
        this.props.formHandler(this.state);
    }
    render() {
        return (
            <div>
                <Progress multi style={{marginBottom: "20px", marginTop: "10px"}}>
                    <Progress bar value="15" color="success">Калькулятор</Progress>
                    <Progress bar animated color="info" max={100} value={30}>Личные данные</Progress>
                    {/*<Progress bar color="info" value="25">Cool</Progress>*/}
                    {/*<Progress bar color="warning" value="20">20%</Progress>*/}
                    {/*<Progress bar color="danger" value="5">!!</Progress>*/}
                </Progress>
                <Form>
                    <FormGroup row>
                        <Label for="surname" sm={2}>Фамилия</Label>
                        <Col sm={10}>
                            <Input type="text" name="surname" id="surname" placeholder="Фамилия"
                                   value={this.state.surname}
                                   onChange={(e)=>{
                                       this.setState({surname: e.target.value})
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={2}>Имя</Label>
                        <Col sm={10}>
                            <Input type="text" name="name" id="name" placeholder="Имя"
                                   value={this.state.name}
                                   onChange={(e)=>{
                                       this.setState({name: e.target.value})
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="patronymic" sm={2}>Отчество</Label>
                        <Col sm={10}>
                            <Input type="text" name="patronymic" id="patronymic" placeholder="Отчество"
                                   value={this.state.patronymic}
                                   onChange={(e)=>{
                                       this.setState({patronymic: e.target.value})
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="email" placeholder="email@ules.kz"
                                   value={this.state.email}
                                   onChange={(e)=>{
                                       this.setState({email: e.target.value})
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="identity_card_file_name" sm={2}>Уд.л.</Label>
                        <Col sm={10}>
                            <Input type="file" name="identity_card_file_name" id="identity_card_file_name"/>
                            <FormText color="muted">
                                Файл с лицевой стороной удостоверения личности
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="identity_card_back_file_name" sm={2}>Уд.л.</Label>
                        <Col sm={10}>
                            <Input type="file" name="identity_card_back_file_name" id="identity_card_back_file_name"/>
                            <FormText color="muted">
                                Файл с обратной стороной удостоверения личности
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="user_photo_file_name" sm={2}>Фото</Label>
                        <Col sm={10}>
                            <Input type="file" name="user_photo_file_name" id="user_photo_file_name"/>
                            <FormText color="muted">
                                Файл с Фотографией
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{size: 10, offset: 2}}>
                            <Button onClick={this.sendData.bind(this)}>Далее</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}