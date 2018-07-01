import React, {Component} from 'react';
import {Progress, Form, Label, Input, Button, Navbar, Row, Col, ButtonToolbar} from 'reactstrap';
import {Glyphicon} from 'react-bootstrap';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import PageSend from './PageSend';
import Calculator from "./Calculator";
import {loadBanks} from "./api/banks";
import logo from './logo.png';
import {Motion, spring} from 'react-motion';
import './landingPage.css';
import iconCalculator from './icons/Calculator.png';
import iconContract from './icons/Contract.png';
import iconCreditCard from './icons/Credit-Card-Back.png';

export default class MultiForm extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{background: "white"}}>
                <Row className="hero">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-md-12" style={{display: "flex", flexFlow: "column"}}>
                                <div style={{backgroundColor: "white", opacity:"0.6", width: "200px", height: "100px",
                                    display:"flex", margin: "auto",
                                    borderRadius: "75px",
                                }}>
                                    <a className="hero-brand" href="index.html" title="Home" style={{margin: "auto"}}><img width="100px" alt="Bell Logo" src={logo}/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h1>
                                Равноправное кредитование
                            </h1>
                            <p className="tagline">
                                Мы делаем финансирование проще!
                            </p>
                            <Button style={{borderRadius: "15px"}} onClick={(e)=>this.props.switcher()}>Оформить кредит</Button>
                        </div>
                    </div>
                </Row>
                <section className="about" id="about">
                    <div className="container text-center">
                        <h2>
                            О нашей компании
                        </h2>

                        <p>
                            Наша команда – это не только высококвалифицированные профессионалы, но и творчески мыслящие, креативные и хорошо подготовленные специалисты. Мы развиваем молодую и перспективную компанию с безграничными возможностями.
                        </p>

                        <div className="row stats-row">
                            <div className="stats-col text-center col-md-3 col-sm-6">
                                <div className="circle">
                                    <span className="stats-no" data-toggle="counter-up">800+</span> Довольных клиентов
                                </div>
                            </div>

                            <div className="stats-col text-center col-md-3 col-sm-6">
                                <div className="circle">
                                    <span className="stats-no" data-toggle="counter-up">2000+</span> Выданных кредитов
                                </div>
                            </div>

                            <div className="stats-col text-center col-md-3 col-sm-6">
                                <div className="circle">
                                    <span className="stats-no" data-toggle="counter-up">24/7</span> Техподдержка
                                </div>
                            </div>

                            <div className="stats-col text-center col-md-3 col-sm-6">
                                <div className="circle">
                                    <span className="stats-no" data-toggle="counter-up">10</span> Минут на оформление
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-sm-12 text-lg-left text-center">
                                <h2>
                                    Воспользуйтесь кредитным калькулятором
                                </h2>

                                <p>
                                    Никаких скрытых платежей, всё прозрачно и честно.
                                </p>
                            </div>

                            <div className="col-lg-3 col-sm-12 text-lg-right text-center">
                                <a className="btn btn-ghost" href="#" onClick={this.props.switcher}>Калькулятор</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features" id="features">
                    <div className="container">

                        <div className="row">
                            <div className="feature-col col-lg-4 col-xs-12">
                                <div className="card card-block text-center">
                                    <div>
                                        <div className="feature-icon" style={{backgroundImage: `url(${iconCreditCard})`, backgroundColor: "transparent",
                                            backgroundSize: "cover",
                                            backgroundPosition: "50% 50%"}}>
                                        </div>

                                    </div>

                                    <div>
                                        <h3>
                                            Онлайн
                                        </h3>

                                        <p>
                                            Оформляйте кредит онлайн и получайте деньги прямо на свою дебетную карту.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="feature-col col-lg-4 col-xs-12">
                                <div className="card card-block text-center">
                                    <div>
                                        <div className="feature-icon" style={{backgroundImage: `url(${iconContract})`, backgroundColor: "transparent",
                                            backgroundSize: "cover",
                                            backgroundPosition: "50% 50%"}}>
                                        </div>

                                    </div>

                                    <div>
                                        <h3>
                                            Контракт
                                        </h3>

                                        <p>
                                            Никаких скрытых платежей, всё прозрачно и честно
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="feature-col col-lg-4 col-xs-12">
                                <div className="card card-block text-center">
                                    <div>
                                        <div className="feature-icon" style={{backgroundImage: `url(${iconCalculator})`, backgroundColor: "transparent",
                                            backgroundSize: "cover",
                                            backgroundPosition: "50% 50%"}}>
                                        </div>
                                    </div>

                                    <div>
                                        <h3>
                                            Калькулятор
                                        </h3>

                                        <p>
                                            Посчитайте переплату по кредиту до начала оформления
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Calculator formHandler={this.props.switcherDirect}/>

                <footer className="site-footer">
                    <div className="bottom">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-6 col-xs-12 text-lg-left text-center">
                                    <p className="copyright-text">
                                        © ULES
                                    </p>
                                    <div className="credits">
                                        Онлайн кредитование <a href="http://www.ules.kz">www.ules.kz</a>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-xs-12 text-lg-right text-center">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="index.html">Наверх</a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a href="#about">О компании</a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a href="#features">Услуги</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}