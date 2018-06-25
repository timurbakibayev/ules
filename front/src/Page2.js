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

export default class Page2 extends Component {
    constructor() {
        super();
        this.state = {
            gender: "",
            birthday: "",
            identity_card_personal_identification_number: "",
            identity_card_number: "",
            identity_card_date_of_issuing: "",
            identity_card_validity: "",
            identity_card_issuing_authority: "",
            identity_card_birthplace: "",
            city_type: "",
            city_name: "",
            region_name: "",
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
                    <Progress bar color="success" max={100} value={30}>Личные данные</Progress>
                    <Progress bar animated color="info" value="25">Уд.л.</Progress>
                    {/*<Progress bar color="warning" value="20">20%</Progress>*/}
                    {/*<Progress bar color="danger" value="5">!!</Progress>*/}
                </Progress>
                <Form>
                    <FormGroup row>
                        <Label for="gender" sm={2}>Пол</Label>
                        <Col sm={10}>
                            <Input type="select" name="gender" id="gender"
                                   value={this.state.gender}
                                   onChange={(e)=>{
                                       this.setState({gender: e.target.value})
                                   }}
                            >
                                <option value={""}></option>
                                <option value={"Муж"}>Мужской</option>
                                <option value={"Жен"}>Женский</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="birthday" sm={2}>Дата рождения</Label>
                        <Col sm={10}>
                            <Input type="date" name="birthday" id="birthday"
                                   value={this.state.birthday}
                                   onChange={(e)=>{
                                       this.setState({birthday: e.target.value})
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="identity_card_personal_identification_number" sm={2}>ИИН</Label>
                        <Col sm={10}>
                            <Input type="text" name="identity_card_personal_identification_number"
                                   id="identity_card_personal_identification_number" placeholder="ИИН"
                                   value={this.state.identity_card_personal_identification_number}
                                   onChange={(e)=>{
                                       this.setState({identity_card_personal_identification_number: e.target.value})
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Отчество</Label>
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
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="email@ules.kz"
                                   value={this.state.email}
                                   onChange={(e)=>{
                                       this.setState({email: e.target.value})
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>Уд.л.</Label>
                        <Col sm={10}>
                            <Input type="file" name="identity_card_file_name" id="identity_card_file_name"/>
                            <FormText color="muted">
                                Файл с лицевой стороной удостоверения личности
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>Уд.л.</Label>
                        <Col sm={10}>
                            <Input type="file" name="identity_card_back_file_name" id="identity_card_back_file_name"/>
                            <FormText color="muted">
                                Файл с обратной стороной удостоверения личности
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>Фото</Label>
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