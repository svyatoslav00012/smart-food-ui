import React, {Component} from 'react';

import {importImage} from "../../../data/utils";
import {Button, Typography} from "@material-ui/core";
import Theme from "../../../Theme";
import {Link} from "react-router-dom";
import FrontendRoutes from "../../../data/FrontendRoutes";

class Landing extends Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <div style={{position: 'absolute', left: '7vw', top: '5vw'}}>
                    <Typography style={{
                        lineHeight: '4vw',
                        width: '50vw',
                        fontSize: '3vw',
                        color: Theme.palette.main,
                        margin: Theme.spacing.unit
                    }} variant="h3">
                        Заказывайте фермерские продукты онлайн
                    </Typography>
                    <Typography style={{
                        fontSize: '2vw',
                        width: '25vw',
                        color: Theme.palette.main,
                        margin: Theme.spacing.unit
                    }} variant="h5">
                        При заказе от 850 грн доставка <span style={{fontWeight: 'bold'}}>бесплатно</span>
                    </Typography>
                    <Button variant="contained"
                            component={Link}
                            to={FrontendRoutes.CART}
                            style={{
                                color: Theme.palette.fontColor,
                                backgroundColor: Theme.palette.third,
                                margin: Theme.spacing.unit,
                                fontSize: '1.5vw',
                                fontWeight: 'bold',
                                width: '15vw'
                            }}>
                        Заказать
                    </Button>
                </div>
                <img style={{width: '100%'}} alt="landing image" src={importImage("landing.png")}/>
            </div>
        );
    }
}

export default Landing;