import React, { Component } from 'react';
import balloon from './images/balloon.svg'
import './App.scss';

class BreathSession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inhale: "Inhale",
            done: 0,
            bln_width: 54,
            bln_top: 228,
        }

        this.inhaleStat = ["Inhale", "Hold", "Exhale"];

    }

    componentDidMount() {
        let scwrapper = document.getElementsByClassName("screenwrapper")[0];
        setTimeout(function () {
            scwrapper.style.opacity = 1;
        }, 1);
        this.refreshTimer();
        let count = 0;
        this.ticking = setInterval(function () {
            
            count += 1;

            if (count === 3) {
                clearInterval(this.ticking);
                this.props.pageChange(6);
            }
            this.refreshTimer();
        }.bind(this), 9000);

        


    }

    refreshTimer() {

        this.setState({ inhale: this.inhaleStat[0] });
        setTimeout(function () {
            this.setState({ inhale: this.inhaleStat[1] });
        }.bind(this), 3500)
        setTimeout(function () {
            this.setState({
                inhale: this.inhaleStat[2],
                bln_width: this.state.bln_width + 50,
                bln_top: this.state.bln_top - 20
            });

        }.bind(this), 5500)

    }

    render() {
        return (
            <div>
                <div className="sectitle" key="sectitle">{this.state.inhale}
                </div>
                <div className="timer">


                    <svg className="bln_circle timercir">
                        <circle r="133" cx="140" cy="140"></circle>
                    </svg>

                    <svg className="bln_circle blk">
                        <circle r="133" cx="140" cy="140"></circle>
                    </svg>
                    <svg className="bln_circle">
                        <circle r="133" cx="140" cy="140"></circle>
                    </svg>
                    <div className="dots" id="inhale"></div>
                    <div className="dots" id="hold"></div>

                    <div className="settimes blnwrapper" style={{ top: this.state.bln_top }}><img id="balloon" alt="balloon" src={balloon} style={{ width: this.state.bln_width }} /></div>


                </div>

            </div>
        );
    }
}

export default BreathSession;
