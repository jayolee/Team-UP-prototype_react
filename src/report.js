import React, { Component } from 'react';
import polarbear from './images/polarbear.svg'
import bkspmonkey from './images/bkspmonkey.svg'
import red_panda from './images/red panda.svg'
import grassbg from './images/expand.svg'
import reportbg from './images/report_bg.svg'
import report_day from './images/report_day.svg'
import report_week from './images/report_week.svg'
import report_month from './images/report_month.svg'
import report_year from './images/report_year.svg'
import './App.scss';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poppage: 0,
            big: 0,
            otherop: 1,
            biggerClass: "island",
            greybox: {
                opacity: 0,
                display: "none",
            },
            timeop:1,
            timeimg: report_week,
            total:<span>Total <span className="bold">11.5</span> hr</span>,
        }
        this.timeinfo={
            "day":[report_day, '', "Today"],
            "week":[report_week, <span>Total <span className="bold">11.5</span> hr</span>, "This Week"],
			"month":[report_month, <span>Total <span className="bold">24</span> hr</span>, "This Month"],
			"year":[report_year, <span>Total <span className="bold">704</span> hr</span>, "This year"],
        }
        this.timekey=["day","week","month","year"]
    }

    componentDidMount() {
        let scwrapper = document.getElementsByClassName("screenwrapper")[0];
        setTimeout(function () {
            scwrapper.style.opacity = 1;
        }, 1);
        this.refs.island.scrollLeft=203;

    }
    addBigger() {
        let backbutton = document.getElementsByClassName("backbutton")[0];
        if (this.state.big) {
            this.setState({ biggerClass: "island", big: 0, otherop: 1 })
            backbutton.style.opacity = 1;
            setTimeout(function(){
                this.refs.island.scrollLeft=203;
            }.bind(this),100);
            
        }
        else {
            this.setState({ biggerClass: "island bigger", big: 1, otherop: 0 });
            backbutton.style.opacity = 0;
        }
        
    }
    rmBigger() {
        let backbutton = document.getElementsByClassName("backbutton")[0];
        if (this.state.big) {
            this.setState({ biggerClass: "island", big: 0, otherop: 1 })
            backbutton.style.opacity = 1;
            setTimeout(function(){
                this.refs.island.scrollLeft=203;
            }.bind(this),100);
           
        }
        
    }
    datePicker(e){
        let curid= e.target.id;
        let datepicker = '';
        for(let i=0; i<4; i++){
            datepicker=document.getElementById(this.timekey[i]);
            if(curid === this.timekey[i]){
                datepicker.classList.add("active")
            }else{
                datepicker.classList.remove("active")
            }
        }
        this.setState({total: this.timeinfo[curid][1], timeimg: this.timeinfo[curid][0]});
    }
    render() {
        return (
            <div onClick={this.rmBigger.bind(this)}>
                <div className="report_section">

                    <div className="title" key="islandTitle" style={{opacity: this.state.otherop}}>My Island <img id="expand" alt="Expand Button" src={grassbg} onClick={this.addBigger.bind(this)} /></div>
                    <div className={this.state.biggerClass} key="island" ref="island">
                    <div className="land" >
                        <div className="animaldiv">
                            <img id="rpda" alt="Red Panda" src={red_panda} />
                            <img id="bksm" alt = "Black Spider Monkey" src={bkspmonkey} />
                            <img id="pbr" alt="Polar Bear" src={polarbear} />
                        </div>
                        </div>
                    </div></div>

                <div className="report_section" id="graph" key="graph" style={{opacity: this.state.otherop}}>

                    <div className="title">Session Report</div>
                    <div className="date">
                        <div className="datepicker" onClick={this.datePicker.bind(this)} id="day" >Day</div>
                        <div className="datepicker active"  onClick={this.datePicker.bind(this)} id="week">Week</div>
                        <div className="datepicker" onClick={this.datePicker.bind(this)} id="month">Month</div>
                        <div className="datepicker" onClick={this.datePicker.bind(this)} id="year">Year</div></div>

                    <div className="weekrow">
                        <div className="arrow_button">
                            <svg className="icon" height="12" width="12" >
                                <path d="M12 0 L6 6 L12 12" fill="none" strokeWidth="3" />
                            </svg>
                        </div>
                        <div className="week">This Week</div>
                    </div>
                    <div className="reportcard"><img alt="report background" src={reportbg} />
                        <img id="reporttype" alt="report" src={this.state.timeimg} key="reporttype" /></div>
                    <div className="timeinfo" key="totaltime" style={{opacity:this.state.timeop}}>{this.state.total}</div>


                </div>

            </div>
        );
    }
}

export default Report;
