import React, { Component } from 'react';
import ocean from './images/ocean.svg'
import './App.scss';

class SessionDone extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        let scwrapper = document.getElementsByClassName("screenwrapper")[0];
        setTimeout(function () {
            scwrapper.style.opacity = 1;
        }, 1);


    }
    render() {
        return (
            <div>
            <div className="sectitle status">
               You're now 30 minutes from saving the animal!
            </div>
                <div className="countwrapper">
                <div className="timerwrapper">
                    <div className="timer_focus">
                        <img src={ocean} alt="Background"/>
                    </div>
                    </div>
                </div>

                <div className="barwrapper" >
		<svg id="bar2" height="10" width="260">
			
			<line x1="0" y1="0" x2="260" y2="0"></line></svg>
			<svg id="bar" height="10" width="260">
			
			<line x1="0" y1="0" x2="260" y2="0"></line></svg>
			
			</div>
				<div className="leftover_wrap">
				
					<div id="lefttime">1hr</div>
				<div id="totaltime">1.5hr</div>
			
			</div>
            </div>
        );
    }
}

export default SessionDone;
