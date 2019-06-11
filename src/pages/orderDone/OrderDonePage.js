import React, {Component} from 'react';
import {Button, Typography} from "@material-ui/core";
import Theme from "../../Theme";
import {Link} from "react-router-dom";
import FrontendRoutes from "../../data/FrontendRoutes";

class OrderDonePage extends Component {
    render() {
        return (
            <div>
                <Typography style={{marginTop: 40}} variant="h4">Заказ принят</Typography>
                <Typography style={{marginTop: 100, color: Theme.palette.third}} variant="subtitle1">ПОЗДРАВЛЯЕМ!</Typography>
                <Typography style={{dispay: 'flex', fontSize: '1.1vw'}}>
                    <p style={{marginBottom: 0}}>Ваш заказ успешно оформлен</p>
                    <p style={{marginTop: 5, marginBottom: 5}}>Номер Вашего заказа - <p style={{display: 'inline', fontWeight: 'bold'}}>1345</p></p>
                    <p style={{marginTop: 5, marginBottom: 5}}>Сумма - <p style={{display: 'inline', fontWeight: 'bold'}}>109,00 грн</p></p>
                </Typography>
                <Button style={{
                    marginTop: 50,
                    marginBottom: 50,
                    backgroundColor: Theme.palette.third,
                    color: Theme.palette.fontColor,
                    padding: '7px 30px'
                }}
                        component={Link}
                        to={FrontendRoutes.MAIN}
                >На главную</Button>
            </div>
        );
    }
}

export default OrderDonePage;