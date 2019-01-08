import React, { Component } from 'react';
import './App.scss';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poppage: 0,
            time: 0,
            dotstyle: {
                transform: 0,
            },
            ontouch: 0,
        }
    }
    componentDidMount(){

        let scwrapper=document.getElementsByClassName("screenwrapper")[0];
        setTimeout(function(){
            scwrapper.style.opacity=1;
        },1);
       
    }
    timercontrol(e) {
        const mousemoveFunc = e => {
            let win = (window.innerWidth) / 2;
            let screentop = 160;
            let angle = 0;
            let time = 0;
            let midpoint = [win, screentop + 128]


            // phone.onMouseMove(function(){

            let posX = e.clientX;
            let posY = e.clientY;
           
            if(e.touches !== undefined){
                posX=e.touches[0].clientX;
                posY=e.touches[0].clientY;
            }
            let x = 0;
            let y = 0;
            //first, fourth quadrants
            if (y <= midpoint[1]) {
                y = midpoint[1] - posY;
                //first quadrant
                if (posX - midpoint[0] >= 0) {
                    x = posX - midpoint[0];
                }
                else {
                    x = midpoint[0] - posX;
                }
                //get angle of the mouse from the center of the timer
                angle = Math.atan2(y, x) * 180 / Math.PI;
                //interval unit is 10/90(mins) = 40deg
                angle = Math.round(angle / 40) * 40;
                if (posX - midpoint[0] >= 0) {
                    angle = 90 - angle;
                }
                else {
                    angle += 270;
                }
                time = Math.round(angle / 40);

            }
            else {//second, third quadrants
                y = posY - midpoint[1];

                //second quadrant
                if (posX - midpoint[0] >= 0) {
                    x = posX - midpoint[0];
                }
                else {
                    x = midpoint[0] - posX;
                }
        
                angle = Math.atan2(y, x) * 180 / Math.PI;
                angle = Math.abs(Math.round(angle / 40) * 40);
                if (posX - midpoint[0] >= 0) {
                    angle = 180 - angle;
                }
                else {
                    angle = 180 - angle;
                }
                time = Math.round(angle / 40) * 10;

            }
            this.setState({ time: time, dotstyle: { transform: "rotate(" + angle + "deg)" } })


        }

       
        document.addEventListener("mousemove", mousemoveFunc);
        document.addEventListener("mouseup", e => {
            document.removeEventListener("mousemove", mousemoveFunc);
        })
        document.addEventListener("touchmove", mousemoveFunc);
        document.addEventListener("touchend", e => {
            document.removeEventListener("touchmove", mousemoveFunc);
        })


    }

    render() {
        return (
            <div>
                <div className="time_control" key="knobbox" style={this.state.dotstyle}>
                    <div className="dots" id="knob" key="knob" onMouseDown={this.timercontrol.bind(this)} onTouchMove={this.timercontrol.bind(this)} />
                </div>
                <div id="settime" key="settime">{this.state.time}0:00</div>
                <div className="time" />
            </div>
        );
    }
}

export default Timer;
