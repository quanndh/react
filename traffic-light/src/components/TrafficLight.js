import React, { Component } from 'react';
import "./TrafficLight.css";
import classNames from "classnames"


const red = 0;
const orange = 1;
const green = 2;

class TrafficLight extends Component {

    render() { 
        const {currentColor} = this.props;
        return (  
           <div className="TrafficLight">
                <div className={classNames('bulb', 'red', {
                    active: currentColor === red
                })} />
                <div className={classNames('bulb', 'orange', {
                    active: currentColor === orange
                })} />
                <div className={classNames('bulb', 'green', {
                    active: currentColor === green
                })} />
           </div> 
        );
    }
}
 
export default TrafficLight;