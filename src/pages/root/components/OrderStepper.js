import Theme from "../../../Theme";
import {Typography} from "@material-ui/core";
import React from "react";

const center = {display: 'flex', justifyContent: 'center', alignItems: 'cetner'};

/**
 *
 * @param props.label : String - text for the step
 * @param props.index : String - index of the step
 * @param props.completed : Boolean - weather current step completed or not
 * @param props.width : Number - length of step element + line
 * @constructor
 */
const Step = props => {

    const st = {
        root: {marginBottom: 50, ...center},
        circle: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderRadius: 50,
            borderStyle: 'solid',
            width: 30,
            height: 30,
            padding: 5,
            margin: 10,
            borderColor: props.completed ? Theme.palette.main : 'lightgrey',
        },
        label: {
            position: 'absolute',
            transform: 'translate(calc(-50% + 30px), 0%)',
            maxWidth: 300,
            textAlign: 'center',
            color: props.completed ? Theme.palette.main : 'lightgrey',
        },
        typography: {
            textAlign: 'center',
            color: props.completed ? Theme.palette.main : 'lightgrey',
            fontSize: 20,
        },
        line: {
            margin: 'auto',
            borderWidth: 0.5,
            borderStyle: 'dashed',
            width: props.width - 50,
            borderColor: props.completed ? Theme.palette.main : 'lightgrey',
        }
    };

    return (<div style={st.root}>
        {props.index > 0 && <div style={st.line}/>}
        <div>
            <div style={st.circle}>
                <Typography style={st.typography}>{props.index + 1}</Typography>
            </div>
            <Typography style={st.label}>{props.label}</Typography>
        </div>
    </div>)
};

/**
 *
 * @param props.steps: Array - list of steps
 * @param props.currentStep : Number - current step
 * @param props.width : Number - width of stepper
 * @constructor
 */
const OrderStepper = props => {
    return (<div style={{...center, margin: Theme.spacing.unit * 2}}>
        {props.steps.map((step, index) => <Step label={step}
                                                index={index}
                                                completed={index <= props.currentStep}
                                                width={props.width / props.steps.length}/>)}
    </div>);
};

export default OrderStepper;