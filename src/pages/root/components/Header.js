import React, {Component} from 'react';
import Theme from "../../../Theme";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import {Icon} from "@material-ui/core";
import {Link} from "react-router-dom";
import FrontendRoutes from "../../../data/FrontendRoutes";

export default class Header extends Component {
    render() {

        const st = {
            header: {
                backgroundColor: Theme.palette.main,
                width: '100%',
                margin: 0,
                padding: Theme.spacing.unit
            },
            element: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none'
            },
            typography: {
                cursor: 'pointer',
                fontSize: 12,
                color: Theme.palette.fontColor,
                margin: '0px auto',
                textDecoration: 'none'
            },
            cartIcon: {
                color: Theme.palette.fontColor
            }
        };

        const title = 4;
        const cart = 2;
        const phoneNumber = 2;

        const button = (12 - title - cart - phoneNumber);

        return (
            <Grid container spacing={8} style={st.header}>
                <Grid style={st.element} item xs={title}>
                    <Typography component={Link}
                                to={FrontendRoutes.MAIN}
                                style={{...st.typography, fontSize: 25}}
                                variant="h5">
                        Smart-Food
                    </Typography>
                </Grid>
                <Grid style={st.element} item xs={button}>
                    <Typography style={st.typography} variant="subtitle2">Магазин</Typography>

                    <Typography style={st.typography} variant="subtitle2">Доставка</Typography>

                    <Typography style={st.typography} variant="subtitle2">О нас</Typography>

                    <Typography style={st.typography} variant="subtitle2">Акции</Typography>

                    <Typography style={st.typography} variant="subtitle2">Контакты</Typography>
                </Grid>
                <Grid component={Link} to={FrontendRoutes.CART} style={st.element} item xs={cart}>
                    <Icon style={st.cartIcon}>
                        <CartIcon style={st.cartIcon}/>
                    </Icon>
                    <Typography style={{
                        cursor: 'pointer',
                        fontSize: 12,
                        fontWeight: 100,
                        color: Theme.palette.fontColor,
                    }}
                                variant="subtitle2">109,00</Typography>
                </Grid>
                <Grid style={st.element} item xs={phoneNumber}>
                    <Typography style={st.typography} variant="subtitle2">+38(068)4 888 290</Typography>
                </Grid>
            </Grid>
        );
    }
}

