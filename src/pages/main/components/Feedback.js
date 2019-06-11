import React, {Component} from 'react';
import {SvgIcon, Typography} from "@material-ui/core";
import Theme from "../../../Theme";
import AlexeevichTetiana from "../../../images/AlexeevichTetiana";

const centeredStyle = {display: 'flex', justifyContent: 'center', alignItems: 'center'};

/**
 *
 * @param props.size: Int - amount of bullets
 * @param props.current: Int - current bullet selected
 * @param props.onChange: Int - action to perform on bullet press
 * @return {*}
 * @constructor
 */
function BulletSlider(props){

    const bulletStyle = index => {
        return {
            width: 8,
            height: 8,
            borderRadius: 50,
            cursor: 'pointer',
            margin: 5,
            backgroundColor: index === props.current ? Theme.palette.main : 'lightgrey',
            transform: index === props.current ? 'scale(1.5)' : '',
        };
    };

    return (<div style={{...centeredStyle, marginBottom: 200}}>
        {new Array(props.size).fill(1).map((b, index) => <div style={bulletStyle(index)} />)}
    </div>);
}

class Feedback extends Component {
    render() {
        return (
            <div style={{marginTop: 300}}>
                <Typography style={centeredStyle} variant="h5">Отзывы</Typography>
                <div style={{...centeredStyle, marginTop: 30}}>
                    <img src={AlexeevichTetiana}
                         style={{
                             width: 100,
                             height: 100,
                             borderRadius: '50%',
                         }}/>
                </div>
                <Typography variant="subtitle1" style={{
                    ...centeredStyle,
                    color: Theme.palette.main,
                    fontSize: 18
                }}>Анна</Typography>

                <div style={{...centeredStyle, margin: 50}}>
                    <Typography align="center"
                                text
                                variant="subtitle1"
                                style={{
                                    width: '40%',
                                    fontStyle: 'italic',
                                }}>
                        Большое спасибо за отличную работу. Просто влюбилась в Ваш интернет-магазин. Уже несколько раз
                        делала у Вас заказы. Отличная продукция, очень быстрое оформление заказов, быстрая и удобная
                        доставка.
                    </Typography>
                </div>

                <BulletSlider size={5} current={1}/>

            </div>
        );
    }
}

export default Feedback;