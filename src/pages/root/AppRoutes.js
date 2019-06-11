import React, {Component} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/FrontendRoutes";
import MainPage from "../main/MainPage";
import CartPage from "../cartPage/CartPage";
import DeliveryPage from "../delivery/DeliveryPage";
import OrderDonePage from "../orderDone/OrderDonePage";
import OrderStepper from "./components/OrderStepper";

const steps = ["Корзина", "Оформление заказа", "Заказ принят"];

const routeStep = {};
routeStep[FrontendRoutes.CART] = steps[0];
routeStep[FrontendRoutes.DELIVERY] = steps[1];
routeStep[FrontendRoutes.ORDER_DONE] = steps[2];


const OrderWrapper = props => {
    let curStep = 0;
    Object.keys(routeStep).forEach((key, index) => {
        if (location.href.endsWith(key))
            curStep = index;
    });

    return (<div>
        <OrderStepper width={1100} steps={steps} currentStep={curStep}/>
        <div>
            <div style={{width: '80%', margin: 'auto'}}>
                {props.children}
            </div>
        </div>
    </div>)
};

export default class AppRoutes extends Component {

    render() {
        return (
            <BrowserRouter>
                <div style={{minWidth: '100vh'}}>
                    <Header/>
                    <Switch>
                        <Route exact path={FrontendRoutes.MAIN} component={() => <MainPage/>}/>
                        <OrderWrapper>
                            <Route exact path={FrontendRoutes.CART} component={() => <CartPage/>}/>
                            <Route exact path={FrontendRoutes.DELIVERY} component={() => <DeliveryPage/>}/>
                            <Route exact path={FrontendRoutes.ORDER_DONE} component={() => <OrderDonePage/>}/>
                        </OrderWrapper>
                        <Redirect to={FrontendRoutes.MAIN}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}