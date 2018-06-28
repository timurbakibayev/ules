import React, {Component} from 'react';
import {Progress, Form, Label, Input, Button, Row, FormGroup, FormText, Col, CustomInput} from 'reactstrap';
import creditCard from "./credit-card-gif-12.gif";
import {signUp} from "./api/signup";

export default class PageSend extends Component {
    constructor() {
        super();
        this.state = {
            sending: false,
            progress: 0,
        }
    }

    async submit() {
        this.setState({sending: true});
        await signUp();
        this.setState({progress: 10});
    }

    sendDataBack() {
        this.props.formHandler(this.state, false);
    }

    render() {
        return (
            <div>
                <Form>

                    <Row>

                    </Row>

                        <Col sm={{size: 6, offset: 2}}>
                            {this.state.sending && <img src={creditCard} />}
                            {!this.state.sending && <Button onClick={this.submit.bind(this)}>Отправить</Button>}
                            {this.state.sending && <p>Ваша заявка обрабатывается. Пожалуйста, подождите...</p>}
                            {this.state.sending && <Progress value={this.state.progress}></Progress>}
                        </Col>

                </Form>
            </div>
        )
    }
}