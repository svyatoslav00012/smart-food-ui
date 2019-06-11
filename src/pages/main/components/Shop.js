import React, {Component} from 'react';
import Theme from "../../../Theme";
import Button from "@material-ui/core/Button";
import ProductsData from "../../../data/ProductsData";
import Paper from "@material-ui/core/Paper";
import {importImage} from "../../../data/utils";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Star from "@material-ui/icons/Star";
import StarOutlined from "@material-ui/icons/StarBorderOutlined";

function Item(props) {
    return <Button style={{
        color: props.selected ? Theme.palette.third : 'grey',
        margin: Theme.spacing.unit
    }}>{props.text}</Button>;
}

const centerStyle = {display: 'flex', justifyContent: 'center', alignItems: 'center'};

class ButtonWithHover extends Component {
    state = {hovered: false};

    render() {
        return (<Button onMouseEnter={() => this.setState({hovered: true})}
                        onMouseLeave={() => this.setState({hovered: false})}
                        variant="outlined"
                        style={{
                            backgroundColor: this.state.hovered ? Theme.palette.third : "transparent",
                            color: this.state.hovered ? Theme.palette.fontColor : Theme.palette.third,
                            borderColor: this.state.hovered ? Theme.palette.fontColor : Theme.palette.third
                        }}>{this.props.text}</Button>)
    }
}

function doubleFormat(val){
    return parseFloat(Math.round(val * 100) / 100).toFixed(2);
}

function StarsPanel(props){
    return (<div style={{display: 'flex', justifyContent: 'center'}}>
        {new Array(props.stars).fill(1).map(s => <Star style={{color: Theme.palette.third}}/>)}
        {new Array(5 - props.stars).fill(1).map(s => <StarOutlined style={{
            color: Theme.palette.third
        }}/>)}
    </div>)
}

class ProductCard extends Component {

    state = {
        hover: false
    };

    render() {
        return (<Paper elevation={this.state.hover ? 5 : 0}
                       style={{cursor: 'pointer', padding: Theme.spacing.unit}}
                       onMouseEnter={() => this.setState({hover: true})}
                       onMouseLeave={() => this.setState({hover: false})}
        >
            <img style={{width: '100%'}} src={importImage(this.props.product.image)}/>
            <Typography variant="subtitle1" style={centerStyle}>{this.props.product.name}</Typography>
            <StarsPanel stars={this.props.product.rate}/>
            <Typography variant="subtitle1"
                        style={{
                            ...centerStyle,
                            fontWeight: "bold",
                            color: Theme.palette.main
                        }}
            >{doubleFormat(this.props.product.price) + " грн/" + this.props.product.unit}</Typography>
            <div style={{...centerStyle, marginTop: Theme.spacing.unit}}>
                <ButtonWithHover variant="outlined" text="В корзину"/>
            </div>
        </Paper>);
    }
}

class Shop extends Component {

    state = {
        products: ProductsData,
        currentProduct: "vegetables"
    };

    render() {

        const {products, currentProduct} = this.state;

        return (
            <div>
                <div style={{
                    ...centerStyle,
                    marginTop: 100,
                }}>
                    {Object.keys(products).map(key =>
                        (<Item selected={key === currentProduct} text={products[key].translation}/>)
                    )}
                </div>

                <div style={{padding: '0px 110px'}}>
                    <Grid container spacing={16}>
                        {products[currentProduct].list.map(product =>
                            (<Grid item xs={3}>
                                <ProductCard product={product}/>
                            </Grid>)
                        )}
                        {products[currentProduct].list.map(product =>
                            (<Grid item xs={3}>
                                <ProductCard product={product}/>
                            </Grid>)
                        )}
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Shop;