import React, {Component} from 'react';
import Theme from "../../../Theme";
import {Icon, SvgIcon, Typography} from "@material-ui/core";
import LocationIcon from "@material-ui/icons/Place";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

export default class Footer extends Component {
    render() {

        const st = {
            footer: {
                backgroundColor: Theme.palette.main,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'top',
                padding: 50,
            },
            block: {
                margin: 'auto'
            },
            blockTitle: {
                color: Theme.palette.fontColor,
                marginBottom: Theme.spacing.unit * 3
            },
            blockPoint: {
                color: Theme.palette.fontColor,
                fontSize: 12
            },
            icon: {
                color: Theme.palette.fontColor,
                fontSize: 18,
                width: 18,
                height: 18,
            },
            bullet: {
                backgroundColor: Theme.palette.fontColor,
                borderRadius: 50,
                width: 3,
                height: 3,
                margin: 5,
            },
            center: {
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center'
            }
        };

        const Title = (props) => (
            <Typography variant="subtitle1" style={st.blockTitle}>{props.text.toUpperCase()}</Typography>);

        const Point = (props) => (
            <div style={{...st.center, margin: 10}}>
                {props.icon ? <Icon fontSize="small" style={{...st.icon, marginRight: 5}} ><props.icon small style={st.icon}/></Icon> : <div style={st.bullet}/>}
                <Typography variant="subtitle2" style={st.blockPoint}>{props.text}</Typography>
            </div>
        );

        const Space = (props) => <div style={{margin: 38}}/>;

        return (
            <div style={st.footer}>
                <div style={st.block}>
                    <Title text="Информация"/>
                    <Point text="О нас"/>
                    <Point text="Доставка"/>
                    <Space/>
                </div>

                <div style={st.block}>
                    <Title text="Мой аккаунт"/>
                    <Point text="Мой аккаунт"/>
                    <Point text="История заказов"/>
                    <Point text="Список желаний"/>
                </div>

                <div style={st.block}>
                    <Title text="Дополнительно"/>
                    <Point text="Оставить отзыв о магазине"/>
                    <Point text="Производители"/>
                    <Point text="Подарочные наборы"/>
                </div>

                <div style={st.block}>
                    <Title text="контактная информация"/>
                    <Point icon={LocationIcon} text="г. Харьков, ул. Веселая, 19"/>
                    <Point icon={PhoneIcon} text="+38(068) 488 290"/>
                    <Point icon={MailIcon} text="info@smartfood.kh.ua"/>
                </div>

            </div>
        );
    }
}