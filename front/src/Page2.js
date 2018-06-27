import React, {Component} from 'react';
import {Progress, Form, Label, CustomInput, Input, Button, FormGroup, FormText, Col} from 'reactstrap';

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
                    <FormGroup row>
                        <Label for="gender" sm={2}>Пол</Label>
                        <Col sm={10}>
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
                        <Label for="birthday" sm={2}>Дата рождения</Label>
                        <Col sm={10}>
                            <Input type="date" name="birthday" id="birthday" style={{width: "200px"}}
                                   value={this.state.birthday}
                                   onChange={(e)=>{
                                       this.setState({birthday: e.target.value});
                                       localStorage.setItem("birthday", e.target.value);
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
                                       this.setState({identity_card_personal_identification_number: e.target.value});
                                       localStorage.setItem("identity_card_personal_identification_number", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="identity_card_number" sm={2}>Номер уд.л.</Label>
                        <Col sm={10}>
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
                        <Label for="identity_card_date_of_issuing" sm={2}>Дата выдачи</Label>
                        <Col sm={10}>
                            <Input type="date" name="identity_card_date_of_issuing" id="identity_card_date_of_issuing" style={{width: "200px"}}
                                   value={this.state.identity_card_date_of_issuing}
                                   onChange={(e)=>{
                                       this.setState({identity_card_date_of_issuing: e.target.value});
                                       localStorage.setItem("identity_card_date_of_issuing", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="identity_card_validity" sm={2}>Срок действия</Label>
                        <Col sm={10}>
                            <Input type="date" name="identity_card_validity" id="identity_card_validity" style={{width: "200px"}}
                                   value={this.state.identity_card_validity}
                                   onChange={(e)=>{
                                       this.setState({identity_card_validity: e.target.value});
                                       localStorage.setItem("identity_card_validity", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="gender" sm={2}>Выдано</Label>
                        <Col sm={10}>
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

                    <FormGroup row>
                        <Label for="identity_card_birthplace" sm={2}>Место рождения</Label>
                        <Col sm={10}>
                            <Input type="text" name="identity_card_birthplace" id="identity_card_birthplace" placeholder="Место рождения"
                                   value={this.state.identity_card_birthplace}
                                   onChange={(e)=>{
                                       this.setState({identity_card_birthplace: e.target.value});
                                       localStorage.setItem("identity_card_birthplace", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="city_type" sm={2}>Тип населенного пункта</Label>
                        <Col sm={10}>
                            <Input type="text" name="city_type" id="city_type" placeholder="Город"
                                   value={this.state.city_type}
                                   onChange={(e)=>{
                                       this.setState({city_type: e.target.value});
                                       localStorage.setItem("city_type", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="city_name" sm={2}>Название населенного пункта</Label>
                        <Col sm={10}>
                            <Input type="text" name="city_name" id="city_name" placeholder=""
                                   value={this.state.city_name}
                                   onChange={(e)=>{
                                       this.setState({city_name: e.target.value});
                                       localStorage.setItem("city_name", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="region_name" sm={2}>Область</Label>
                        <Col sm={10}>
                            <Input type="text" name="region_name" id="region_name" placeholder=""
                                   value={this.state.region_name}
                                   onChange={(e)=>{
                                       this.setState({region_name: e.target.value});
                                       localStorage.setItem("region_name", e.target.value);
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