import React, {Component} from 'react';
import {Progress, Form, Label, Input, Button, Row, FormGroup, FormText, Col, CustomInput} from 'reactstrap';


export default class Page4 extends Component {
    constructor() {
        super();
        this.state = {
            bank_statement_6m: localStorage.getItem("bank_statement_6m"),
            bank_name: localStorage.getItem("bank_name"),
            bank_account_no: localStorage.getItem("bank_account_no"),
            amount_indebtedness: localStorage.getItem("amount_indebtedness"),
            have_indebtedness: localStorage.getItem("have_indebtedness") === 'true',
            have_bank_account: localStorage.getItem("have_bank_account") === 'true',
            loan_purpose: localStorage.getItem("loan_purpose"),
            busyness_num_of_employees: localStorage.getItem("busyness_num_of_employees"),
            busyness_daily_income: localStorage.getItem("busyness_daily_income"),
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

                            <FormGroup>
                                <Label for="busyness_workplace_name">Название организации</Label>
                                <Input type="text" name="busyness_workplace_name" id="busyness_workplace_name"
                                       placeholder="Название организации"
                                       value={this.state.busyness_workplace_name}
                                       onChange={(e) => {
                                           this.setState({busyness_workplace_name: e.target.value});
                                           localStorage.setItem("busyness_workplace_name", e.target.value);
                                       }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="busyness_employment_type">Сфера деятельности</Label>

                                <Input type="select" name="busyness_employment_type"
                                       id="busyness_employment_type" placeholder="Тип занятости"
                                       value={this.state.busyness_employment_type}
                                       onChange={(e) => {
                                           this.setState({busyness_employment_type: e.target.value});
                                           localStorage.setItem("busyness_employment_type", e.target.value);
                                       }}
                                >
                                    <option value="">Выберите значение...</option>
                                    <option value="Сельское, лесное и рыбное хозяйство">
                                        Сельское, лесное и рыбное хозяйство
                                    </option>
                                    <option value="Горнодобывающая промышленность и разработка карьеров">
                                        Горнодобывающая промышленность и разработка карьеров
                                    </option>
                                    <option value="Обрабатывающая промышленность">
                                        Обрабатывающая промышленность
                                    </option>
                                    <option value="Электроснабжение, подача газа и коммунальные услуги">
                                        Электроснабжение, подача газа и коммунальные услуги
                                    </option>
                                    <option value="Строительство и ремонт">
                                        Строительство и ремонт
                                    </option>
                                    <option value="Оптовая и розничная торговля">
                                        Оптовая и розничная торговля
                                    </option>
                                    <option value="Транспорт и складирование">
                                        Транспорт и складирование
                                    </option>
                                    <option value="Услуги по проживанию и питанию">
                                        Услуги по проживанию и питанию
                                    </option>
                                    <option value="Информация и связь">
                                        Информация и связь
                                    </option>
                                    <option value="Финансовая деятельность">
                                        Финансовая деятельность
                                    </option>
                                    <option value="Операции с недвижимым имуществом">
                                        Операции с недвижимым имуществом
                                    </option>
                                    <option value="Деятельность в области административного обслуживания">
                                        Деятельность в области административного обслуживания
                                    </option>
                                    <option value="Образование">
                                        Образование
                                    </option>
                                    <option value="Здравоохранение и социальные услуги">
                                        Здравоохранение и социальные услуги
                                    </option>
                                    <option value="Развлечения и отдых">
                                        Развлечения и отдых
                                    </option>
                                    <option value="Предоставление прочих видов услуг">
                                        Предоставление прочих видов услуг
                                    </option>
                                </Input>

                            </FormGroup>

                            <FormGroup>
                                <Label for="busyness_type_of_income">ОКЭД</Label>
                                <Input type="text" name="busyness_type_of_income"
                                       id="busyness_type_of_income" placeholder="ОКЭД"
                                       value={this.state.busyness_type_of_income}
                                       onChange={(e) => {
                                           this.setState({busyness_type_of_income: e.target.value});
                                           localStorage.setItem("busyness_type_of_income", e.target.value);
                                       }}
                                >
                                </Input>
                            </FormGroup>


                            <FormGroup>
                                <Label for="busyness_num_of_employees">Кол-во сотрудников</Label>
                                <Input type="select" name="busyness_num_of_employees"
                                       id="busyness_num_of_employees"
                                       value={this.state.busyness_num_of_employees}
                                       onChange={(e) => {
                                           this.setState({busyness_num_of_employees: e.target.value});
                                           localStorage.setItem("busyness_num_of_employees", e.target.value);
                                       }}
                                >
                                    <option value="">Выберите значение...</option>
                                    <option value="1">
                                        1 сотрудник
                                    </option>
                                    <option value="до 5">
                                        до 5 сотрудников
                                    </option>
                                    <option value="6-10">
                                        6-10 сотрудников
                                    </option>
                                    <option value="11-50">
                                        11-50 сотрудников
                                    </option>
                                    <option value="50-100">
                                        50-100 сотрудников
                                    </option>
                                    <option value="100-500">
                                        100-500 сотрудников
                                    </option>
                                    <option value="больше 500">
                                        больше 500 сотрудников
                                    </option>
                                </Input>
                            </FormGroup>


                            <FormGroup>
                                <Label for="busyness_daily_income">Ежедневная выручка</Label>
                                <Input type="text" name="busyness_daily_income" id="busyness_daily_income"
                                       placeholder="Ежедневная выручка"
                                       value={this.state.busyness_daily_income}
                                       onChange={(e) => {
                                           this.setState({busyness_daily_income: e.target.value});
                                           localStorage.setItem("busyness_daily_income", e.target.value);
                                       }}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="busyness_workplace_phone">Рабочий номер</Label>
                                <Input type="text" name="busyness_workplace_phone" id="busyness_workplace_phone"
                                       placeholder="Рабочий номер"
                                       value={this.state.busyness_workplace_phone}
                                       onChange={(e) => {
                                           this.setState({busyness_workplace_phone: e.target.value});
                                           localStorage.setItem("busyness_workplace_phone", e.target.value);
                                       }}
                                />
                            </FormGroup>

                        </Col>
                        <Col xs="6" sm="6">
                            <FormGroup>
                                <Label for="loan_purpose">Цель получения займа</Label>
                                <Input type="text" name="loan_purpose"
                                       id="loan_purpose" placeholder="Цель получения займа"
                                       value={this.state.loan_purpose}
                                       onChange={(e) => {
                                           this.setState({loan_purpose: e.target.value});
                                           localStorage.setItem("loan_purpose", e.target.value);
                                       }}
                                >
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <FormGroup check>
                                    <Label check style={{marginBottom: ".5rem"}}>
                                        <Input type="checkbox" name="have_indebtedness" id="same_address"
                                               checked={this.state.have_indebtedness}
                                               onChange={(e) => {
                                                   this.setState({have_indebtedness: e.target.checked});
                                                   localStorage.setItem("have_indebtedness", e.target.checked);
                                               }}

                                        />Имеется задолженность перед поставщиками
                                    </Label>
                                </FormGroup>
                                {this.state.have_indebtedness && (<Input type="text" name="amount_indebtedness"
                                                                         id="loan_purpose"
                                                                         placeholder="Сумма задолженности"
                                                                         value={this.state.amount_indebtedness}
                                                                         onChange={(e) => {
                                                                             this.setState({amount_indebtedness: e.target.value});
                                                                             localStorage.setItem("amount_indebtedness", e.target.value);
                                                                         }}
                                >
                                </Input>)}
                            </FormGroup>

                            <FormGroup>
                                <FormGroup check>
                                    <Label check style={{marginBottom: ".5rem"}}>
                                        <Input type="checkbox" name="have_bank_account" id="same_address"
                                               checked={this.state.have_bank_account}
                                               onChange={(e) => {
                                                   this.setState({have_bank_account: e.target.checked});
                                                   localStorage.setItem("have_bank_account", e.target.checked);
                                               }}

                                        />Имеется лицевой счёт в банке
                                    </Label>
                                </FormGroup>
                                {this.state.have_bank_account && (<FormGroup>
                                    <Label for="bank_account_no">Номер счёта</Label>
                                    <Input type="text" name="bank_account_no"
                                           id="bank_account_no" placeholder="Номер счёта"
                                           value={this.state.bank_account_no}
                                           onChange={(e) => {
                                               this.setState({bank_account_no: e.target.value});
                                               localStorage.setItem("bank_account_no", e.target.value);
                                           }}
                                    >
                                    </Input>
                                </FormGroup>)}
                                {this.state.have_bank_account && (<FormGroup>
                                    <Label for="bank_name">Обслуживающий банк</Label>
                                    <Input type="select" name="bank_name"
                                           id="bank_name"
                                           value={this.state.bank_name}
                                           onChange={(e) => {
                                               this.setState({bank_name: e.target.value});
                                               localStorage.setItem("bank_name", e.target.value);
                                           }}
                                    >
                                        <option value="">Выберите банк...</option>
                                        {this.props.banks.map((e) => <option key={e.value}
                                                                             value={e.value}>{e.label}</option>)}
                                    </Input>
                                </FormGroup>)}

                                {this.state.have_bank_account && (
                                    <FormGroup>
                                            <CustomInput type="file" name="bank_statement_6m"
                                                         id="bank_statement_6m"
                                                         label={this.state.bank_statement_6m?this.state.bank_statement_6m:"Загрузить выписку со счета за последние 6 мес."}
                                                         onChange={(e)=>{
                                                             console.log("selecting file");
                                                             let files = e.target.files,
                                                                 value = e.target.value,
                                                                 message;
                                                             console.log(files[0]);
                                                             this.setState({
                                                                 bank_statement_6m: files[0].name,
                                                             });
                                                             localStorage.setItem("bank_statement_6m", files[0].name);
                                                         }}
                                            />
                                    </FormGroup>
                                )}
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