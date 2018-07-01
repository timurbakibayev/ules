import React, {Component} from 'react';
import {
    Progress, Form, Label, Input, Button, FormGroup, FormText, Col, CustomInput,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

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
            modal: false,
            agree: localStorage.getItem("agree") === "true",
            identity_card_personal_identification_number: localStorage.getItem("identity_card_personal_identification_number"),
            // name: localStorage.getItem("name"),
            // surname: localStorage.getItem("surname"),
            // patronymic: localStorage.getItem("patronymic"),
            email: localStorage.getItem("email"),
            mobile_phone: localStorage.getItem("mobile_phone"),
            // identity_card_back_file_name: localStorage.getItem("identity_card_back_file_name"),
            // identity_card_file_name: localStorage.getItem("identity_card_file_name"),
            // user_photo_file_name: localStorage.getItem("user_photo_file_name"),
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
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
                        <Label for="identity_card_personal_identification_number" sm={2}>ИИН</Label>
                        <Col sm={10}>
                            <Input type="text" name="identity_card_personal_identification_number"
                                   id="identity_card_personal_identification_number" placeholder="ИИН"
                                   value={this.state.identity_card_personal_identification_number}
                                   onChange={(e) => {
                                       this.setState({identity_card_personal_identification_number: e.target.value});
                                       localStorage.setItem("identity_card_personal_identification_number", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="mobile_phone" sm={2}>Мобильный телефон</Label>
                        <Col sm={10}>
                            <Input type="text" name="mobile_phone" id="mobile_phone"
                                   placeholder="Номер мобильного телефона"
                                   value={this.state.mobile_phone}
                                   onChange={(e) => {
                                       this.setState({mobile_phone: e.target.value});
                                       localStorage.setItem("mobile_phone", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="email" placeholder="email@ules.kz"
                                   value={this.state.email}
                                   onChange={(e) => {
                                       this.setState({email: e.target.value});
                                       localStorage.setItem("email", e.target.value);
                                   }}
                            />
                        </Col>
                    </FormGroup>

                    {/*<FormGroup row>*/}
                    {/*<Label for="identity_card_back_file_name" sm={2}>Обратная сторона</Label>*/}
                    {/*<Col sm={10}>*/}
                    {/*<CustomInput type="file" name="identity_card_back_file_name" id="identity_card_back_file_name" label="Обратная сторона удостоверения личности"/>*/}
                    {/*</Col>*/}
                    {/*</FormGroup>*/}
                    <FormGroup check>
                        <Label check style={{marginBottom: ".5rem"}}>
                            <Input type="checkbox" name="agree" id="same_address"
                                   checked={this.state.agree}
                                   onChange={(e) => {
                                       this.setState({agree: e.target.checked});
                                       localStorage.setItem("agree", e.target.checked);
                                   }}

                            />Согласен с <a href="#" onClick={this.toggle}>правилами и соглашениями</a>
                        </Label>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{size: 12}}>
                            <Button onClick={this.sendDataBack.bind(this)}>Назад</Button> {this.state.agree &&
                        <Button onClick={this.sendData.bind(this)}>Далее</Button>}
                        </Col>
                    </FormGroup>
                </Form>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}
                       style={{width: "80%"}}>
                    <ModalHeader toggle={this.toggle}>Правила и соглашения</ModalHeader>
                    <ModalBody>
                        <p>
                            1. Клиент, т.е. Заявитель, на сайтах компании ТОО «ULES» (далее –
                            Займодатель) www.ules.kz - для получения займа проходит
                            следующие процедуры:
                        </p><p>
                        1.1. регистрацию, т.е. заполнение первичных персональных данных (ФИО,
                        контактный номер телефона) и оформление согласия с условиями: Правил
                        предоставления займа (далее по тексту Правила) и Политикой
                        конфиденциальности. Подтверждением регистрации является получение кода
                        через SMS-сообщение.
                    </p><p>
                        1.2. оформление Заявления/Оферты, размещенной на сайте, в которой приводится
                        следующие персональные данные: фамилию, имя, отчество; пол; дату и место
                        рождения; ИИН; место проживания и на каком основании (найм или
                        нахождение жилого помещения в собственности Заявителя), семейное
                        положение, данные о супруге (ФИО, дата рождения, свидетельство о
                        заключении брака, количество детей), уровень образования; сведения о
                        занятости; размер месячного дохода; дату следующей зарплаты; регион
                        проживания; адрес фактического проживания; адрес регистрации; время
                        проживания по текущему адресу; номер телефона; номер домашнего телефона
                        (при наличии)/домашнего телефона контактного лица; номер рабочего
                        телефона (при наличии); электронная почта, вложение копии удостоверения
                        личности;
                    </p><p>
                        1.3. согласие на предоставление – получение информации по Заявителю в
                        /из организации (–й) (кредитные бюро, НАО «ГК «Правительство для
                        граждан»);
                    </p><p>
                        1.4. выбрать способ получения займа на платежную карточку и зарегистрировать
                        карту путем введения на платежной странице Processing.kz своих карточных
                        данных. При поддержке 3D-Secure пароля, то Заявителю необходимо ввести
                        соответствующий пароль, либо ввести тестовую сумму. Для получения
                        тестовой суммы Заявителю необходимо обратиться в свой банк-эмитент и
                        пройти дополнительные процедуры верификации, либо войти в свой интернетбанкинг
                        и выгрузить выписку с последними операциями по карт-счету. При
                        правильном введении 3D-Secure пароля или тестовой суммы карта
                        регистрируется.
                    </p><p>
                        1.5. В оферте указан пункт 15. о «Рекуррентный платеж».
                        «15.1. Подписывая настоящий Договор Клиент дает право Товариществу
                        списывать денежные средства с карточного счета Клиента без согласования с
                        Клиентом таких списаний денежных средств, в случае если у Клиента образовалась
                        задолженность по взятому на себя обязательству, до полного погашения
                        образовавшейся задолженности.»
                    </p><p>

                        1.6. Для исключения регистрации одной и той же карты по нескольким займам
                        Займодатель мониторит со своей стороны компании маскированные номера
                        карт. Займодатель получает максированные номера карт при вызове метода
                        CNP «get transaction status code».
                    </p><p>
                        1.7. При выдаче займе производиться регистрация карты и на неё выдается
                        заемные средства. При наступлении даты погашения займа именно с неё
                        списывается сумма к погашению или задолженность.
                    </p><p>
                        1.8. верность заполненных контактных данных подтверждается Заявителем
                        посредством активации в Личном кабинете на сайте специального кода,
                        направленного Заявителю на мобильный телефон, указанный им при
                        заполнении Заявления/Оферты (регистрации) на сайте.
                    </p><p>
                        1.9.В случае если Заявитель согласен получить займ на указанных в Правилах
                        условиях, он должен подтвердить свое согласие на подписание Договора,
                        отправив Оферту на почту с использованием механизма Личного Кабинета на
                        сайте. При этом, Займодатель и Заявитель согласовали, что в соответствии с
                        положениями статьи 395 ГК РК Заявление/Оферта с указанной в ней
                        идентифицирующей клиента информацией (данные удостоверения личности
                        гражданина Республики Казахстан, ИИН, место регистрации клиента, номер
                        мобильного телефона, адрес электронной почты), а также специального кода,
                        считается надлежащим образом подписанной клиентом аналогом
                        собственноручной подписи (совокупностью идентифицирующей информации).
                        Также, Займодатель и Заявитель согласовали, что в соответствии с нормами
                        статей 152 и 716 ГК РК Договор будет считаться заключенным в письменной
                        форме.
                    </p><p>
                        1.10.В случае принятия Займодателем положительного решения о выдаче
                        Заявителю займа, Займодатель предоставляет займ в виде единовременного
                        перечисления суммы займа, указанной в Заявлении/Оферте, на карту
                        Заявителя. Моментом предоставления денег Заявителю признается время
                        перечисления суммы займа на карту Заявителя.
                    </p><p>
                        2. Для погашения займа Клиент, в данном случае Заемщик, проходит следующие
                        процедуры:
                    </p><p>
                        2.1. при погашении займа с зарегистрированный карты, т.е. с той карты, на
                        которую ему была произведена выдача данного микрокредита, Заемщик
                        производит стандартное списание средств.
                    </p><p>
                        2.2. при погашении займа с незарегистрированный карты, Заемщик производит
                        стандартное списание средств путем введения на платежной странице
                        Processing.kz своих карточных данных.
                    </p><p>
                        2.3. при погашении займа через сеть терминалов Qiwi или Kassa24, Заемщик
                        находит приложение Otbasy365, на экране набирает номер телефона, по
                        которому ранее подтверждал получения займа через SMS-сообщение, и в
                        интерфейсе терминала появится сумма к погашению согласно Оферте. Путем
                        ввода купюр в купюроприёмник Заёмщик производит погашение займа.
                    </p><p>
                        3. В случае просроченной задолженности, Займодатель по своему усмотрению может
                        применить реккуретное списание с зарегистрированной карты Заемщика на основе
                        использования сервиса Processing.kz и согласно условиям Заявления/Оферты и
                        Договора.
                    </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={(e) => {
                            this.setState({agree: true});
                            localStorage.setItem("agree", true);
                            this.toggle();
                        }}>Согласен</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Отмена</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}