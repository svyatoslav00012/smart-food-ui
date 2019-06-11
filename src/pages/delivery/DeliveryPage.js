import React, {Component} from 'react';
import Theme from "../../Theme";
import {Button, Icon, TextField, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import FrontendRoutes from "../../data/FrontendRoutes";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

export default class DeliveryPage extends Component {

    state = {
        payMethod: "наличными"
    };

    render() {
        const st = {
            filedSet: {
                width: '30vw',
                margin: Theme.spacing.unit * 2,
                marginBottom: Theme.spacing.unit * 5
            },
            cartTitle: {
                marginLeft: Theme.spacing.unit * 2,
                marginTop: Theme.spacing.unit * 3,
                marginBottom: Theme.spacing.unit * 3,
            },
            buttonsDiv: {
                position: 'relative',
                marginBottom: 150
            },
            buttonMakeOrder: {
                padding: '5px 40px',
                position: 'absolute',
                right: 0,
                backgroundColor: Theme.palette.third,
                color: Theme.palette.fontColor
            },
            linkBack: {
                position: 'absolute',
                display: 'flex',
                left: 0,
                color: 'grey'
            },
            linkBackArrow: {
                color: 'grey',
            },
            linkBackLabel: {
                color: 'grey'
            },
            textfield: {
                marginTop: Theme.spacing.unit
            }
        };

        return (
            <div>
                <Typography variant="h4" style={st.cartTitle}>Доставка</Typography>
                <div style={{display: 'flex'}}>
                    <div style={{...st.filedSet, marginRight: Theme.spacing.unit * 10}}>
                        <TextField label="Ваше имя"
                                   required
                                   fullWidth
                                   style={st.textfield}
                                   placeholder="Введите ваше имя"/>
                        <TextField label="Номер телефона"
                                   required
                                   fullWidth
                                   style={st.textfield}
                                   placeholder="Номер телефона в формате 0661234567"/>
                        <TextField label="Коментарий к заказу"
                                   fullWidth
                                   rows={7}
                                   style={st.textfield}
                                   placeholder="Нет домофона, звоните на телефон"
                                   multiline/>
                    </div>
                    <div style={{...st.filedSet, width: '60vw'}}>
                        <div>
                            <TextField label="Улица"
                                       required
                                       fullWidth
                                       style={{...st.textfield, width: '65%', marginRight: '5%'}}
                                       placeholder="Введите название улицы"/>
                            <TextField label="Дом"
                                       required
                                       fullWidth
                                       style={{...st.textfield, width: '30%'}}
                                       placeholder="Номер дома"/>
                        </div>
                        <div>
                            <TextField label="Подъезд"
                                       required
                                       fullWidth
                                       style={{...st.textfield, width: '30%', marginRight: '5%'}}
                                       placeholder="Номер подъезда"/>
                            <TextField label="Этаж"
                                       required
                                       fullWidth
                                       style={{...st.textfield, width: '30%', marginRight: '5%'}}
                                       placeholder="Номер этажа"/>
                            <TextField label="Квартира"
                                       required
                                       fullWidth
                                       style={{...st.textfield, width: '30%'}}
                                       placeholder="Номер квартиры"/>
                        </div>
                        <Typography variant="subtitle1" style={{marginTop: 25, marginBottom: 10}}>Способы оплаты</Typography>
                        <RadioGroup
                            value={this.state.payMethod}
                            style={{display: 'flex', flexDirection: 'row'}}
                            onChange={e => this.setState({payMethod: e.target.value})}
                        >
                            <FormControlLabel value="наличными" control={<Radio color="primary" />} label="наличными"/>
                            <FormControlLabel value="онлайн оплата" control={<Radio color="primary" />} label="онлайн оплата"/>
                            <FormControlLabel value="картой при оплате" control={<Radio color="primary" />} label="картой при оплате"/>
                        </RadioGroup>
                        <TextField label="Нужна сдача с"
                                   style={st.textfield}
                                   placeholder="Сумма"/>
                    </div>
                </div>
                <div style={st.buttonsDiv}>
                    <Link to={FrontendRoutes.CART} style={st.linkBack}>
                        <Icon style={st.linkBackArrow}>
                            <ArrowLeft/>
                        </Icon>
                        <Typography style={st.linkBackLabel}>Вернуться назад</Typography>
                    </Link>
                    <Button component={Link}
                            to={FrontendRoutes.ORDER_DONE}
                            style={st.buttonMakeOrder}>Подтвердить</Button>
                </div>
            </div>
        );
    }
}