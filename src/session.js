import React, { Component } from 'react';
import ocean from './images/ocean.svg'
import './App.scss';

class Session extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poppage: 0,
            done: 0,
            timer_hr: 0,
            timer_mn: 5,
            isPaused: 0,
            greybox: {
                opacity: 0,
                display: "none",
            },
        }
        this.quitDisplay = ["none", "block"];
        this.congmsg = [<div className="sectitle timersc">
            Congratulations! You’ve saved an animal :)</div>,
        <div className="sectitle timersc des">
            You would need balloons to lift this animal up once it’s saved. Make a balloon now?</div>
        ];

    }

    componentDidMount() {
        this.ticking = setInterval(function () {

            this.refreshTimer();

        }.bind(this), 1000);


        let scwrapper = document.getElementsByClassName("screenwrapper")[0];
        setTimeout(function () {
            scwrapper.style.opacity = 1;
        }, 1);


    }
    refreshTimer() {
        if (this.state.isPaused === 0) {
            this.setState({ timer_mn: this.state.timer_mn - 1 })
            if (this.state.timer_mn === 0) {
                this.props.timerDone(1);
                this.setState({ done: 1 });
                clearInterval(this.ticking);
            }
        }
    }
    timerDoneTitle() {
        if (this.state.done !== 0) {
            return this.congmsg[0];
        }
    }
    timerDoneDes() {
        if (this.state.done !== 0) {
            return this.congmsg[1];
        }
    }
    quitChange(quit) {
        let timerCircle = document.getElementsByTagName("circle")[0];
        if (quit === 1) {
            timerCircle.classList.add("paused");
        }
        else {
            timerCircle.classList.remove("paused");
        }
        this.setState({
            isPaused: quit,
            greybox: {
                opacity: !(quit) * 1,
                display: this.quitDisplay[quit]
            }
        });

        setTimeout(function () {
            this.setState({
                greybox: {
                    opacity: quit,
                    display: this.quitDisplay[quit]
                }
            })
        }.bind(this), 10);

    }
    quitMsg() {
        if (this.state.quit !== 0) {

            return <div className="alert">
                Are you sure to quit? The animal is waiting for you to save ;(
        <div className="btn_wrapper">
                    <div className="button dark" onClick={(ev) => this.quitChange(0)}>Go back to saving animal</div>
                    <div className="button outline" onClick={(ev) => this.props.pageChange(2)}>Save the animal another time</div>
                </div>
            </div>
        }
    }


    render() {
        return (
            <div>
                {this.timerDoneTitle()}
                <div className="countwrapper">
                    <svg className="ocean">
                        <circle r="138" cx="150" cy="150"></circle>
                    </svg>

                    <div className="timerwrapper" />
                    <div className="timer_focus">
                        <img src={ocean} alt="Background" />
                        <div className="settime" key="time">00:0{this.state.timer_mn}</div>

                    </div>
                </div>
                <div className="rndbtn_wrapper"> <div id="quit" key="quitbtn" onClick={(ev) => { this.quitChange(1) }} className="button outline" style={{ opacity: !(this.state.done) * 1 }}>Quit</div></div>
                <div id="greybox" key="greybox" style={this.state.greybox}>{this.quitMsg()}</div>
                {this.timerDoneDes()}

            </div>
        );
    }
}

export default Session;
