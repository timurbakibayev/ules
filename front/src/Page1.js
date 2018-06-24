import React, {Component} from 'react';
import {Progress, Form, Label, Input, Button, FormGroup, FormText, Col} from 'reactstrap';

export default class Page1 extends Component {
    render() {
        return (
            <div>
                <Progress multi style={{marginBottom: "20px", marginTop: "10px"}}>
                    <Progress bar animated value="15">Калькулятор</Progress>
                    <Progress bar color="success" max={100} value={30}>Контактные данные</Progress>
                    {/*<Progress bar color="info" value="25">Cool</Progress>*/}
                    {/*<Progress bar color="warning" value="20">20%</Progress>*/}
                    {/*<Progress bar color="danger" value="5">!!</Progress>*/}
                </Progress>
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="examplePassword"
                                   placeholder="password placeholder"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Select</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="exampleSelect"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
                        <Col sm={10}>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleText" sm={2}>Text Area</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="exampleText"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>File</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" id="exampleFile"/>
                            <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
                            </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label col-sm-2">Radio Buttons</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2"/>{' '}
                                    Option one is this and that—be sure to include why it's great
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2"/>{' '}
                                    Option two can be something else and selecting it will deselect option one
                                </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                                <Label check>
                                    <Input type="radio" name="radio2" disabled/>{' '}
                                    Option three is disabled
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="checkbox2" sm={2}>Checkbox</Label>
                        <Col sm={{size: 10}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox2"/>{' '}
                                    Check me out
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{size: 10, offset: 2}}>
                            <Button>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}