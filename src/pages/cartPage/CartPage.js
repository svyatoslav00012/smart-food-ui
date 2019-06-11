import React, {Component} from 'react';
import {Button, Icon, IconButton, Typography} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import ProductsData from "../../data/ProductsData";
import {importImage} from "../../data/utils";
import PlusIcon from "@material-ui/icons/AddCircleOutline";
import MinusIcon from "@material-ui/icons/RemoveCircleOutline";
import Theme from "../../Theme";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import {Link} from "react-router-dom";
import FrontendRoutes from "../../data/FrontendRoutes";
import DeleteIcon from "@material-ui/icons/RemoveShoppingCart";

const center = {display: 'flex', justifyContent: 'left', alignItems: 'center'};

class CartPage extends Component {

    state = {
        cart: [
            {
                product: ProductsData.vegetables.list[1],
                amount: 1,
            },
            {
                product: ProductsData.vegetables.list[2],
                amount: 2,
            },
        ]
    };

    render() {

        const st = {
            cartTitle: {
                marginLeft: Theme.spacing.unit * 2,
                marginTop: Theme.spacing.unit * 3,
                marginBottom: Theme.spacing.unit * 3,
            },
            minPlButtons: {
                color: 'red',
                padding: 0,
            },
            minPlIcons: {
                fontWeight: 100,
                borderWidth: 1,
                fontSize: 40
            },
            row: {
                borderColor: 'transparent'
            },
            sumDiv: {
                display: 'flex',
                justifyContent: 'flex-end',
                margin: '50px 0px'
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
            }
        };

        return (
            <div>
                <Typography variant="h4" style={st.cartTitle}>Корзина</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell align="left">Вес</TableCell>
                            <TableCell align="left">Цена</TableCell>
                            <TableCell align="left">Количество</TableCell>
                            <TableCell align="left">Сумма</TableCell>
                            <TableCell align="left"/>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{borderColor: 'transparent'}}>
                        {this.state.cart.map(item => (
                            <TableRow style={st.row} key={item.product.name}>
                                <TableCell scope="left">
                                    <div style={center}>
                                        <img style={{height: '80px', width: '80px', marginRight: Theme.spacing.unit}}
                                             src={importImage(item.product.image)}/>
                                        <Typography variant="subtitle1">{item.product.name}</Typography>
                                    </div>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography>1 кг</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography>{item.product.price + " грн"}</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <div style={center}>
                                        <IconButton style={st.minPlButtons}>
                                            <MinusIcon style={st.minPlIcons}/>
                                        </IconButton>
                                        <Typography style={{margin: Theme.spacing.unit}}>{item.amount}</Typography>
                                        <IconButton style={st.minPlButtons}>
                                            <PlusIcon style={st.minPlIcons}/>
                                        </IconButton>
                                    </div>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography>{(item.product.price * item.amount) + " грн"}</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Icon>
                                        <DeleteIcon/>
                                    </Icon>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div style={st.sumDiv}>
                    <Typography>Сумма заказа</Typography>
                    <Typography style={{color: Theme.palette.third, marginLeft: Theme.spacing.unit * 3}}>
                        {this.state.cart.map(item => item.product.price * item.amount).reduce((acc, cur) => acc + cur, 0) + "  грн"}
                    </Typography>
                </div>

                <div style={st.buttonsDiv}>
                    <Link to={FrontendRoutes.MAIN} style={st.linkBack}>
                        <Icon style={st.linkBackArrow}>
                            <ArrowLeft/>
                        </Icon>
                        <Typography style={st.linkBackLabel}>Вернуться назад</Typography>
                    </Link>
                    <Button component={Link}
                            to={FrontendRoutes.DELIVERY}
                            style={st.buttonMakeOrder}>Оформить</Button>
                </div>

            </div>
        );
    }
}

export default CartPage;