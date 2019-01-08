import React, { Component } from 'react'
import Onboarding from './onboarding.js'
import Timer from './timer.js'
import MainScreen from './mainscreen.js'
import Session from './session.js'
import BreathSession from './breath_session.js'
import SaveAnimal from './saveAnimal.js'
import SessionDone from './sessionDone.js'
import Report from './report.js'
import main_red_panda from './images/red-panda-balloon.svg'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      btnstyle: {},
      prototype: 0,
      quit: 0,
      timerdone: 0,
    }

    this.page = [<div className="screenwrapper" style={{ opacity: 1 }} key="page0">
      <div className="contentwrapper" id="topScreen">
        <div className="titleimg">
          <img id="welcome" alt="Red Panda" src={main_red_panda} />
          <div className="sectitle">Welcome to Up!</div>
        </div>
      </div>
      <div className="buttonWrapper">
        <div className="button dark" onClick={(ev) => this.pageChange(1)}>Log In</div>
        <div className="button light">Sign Up</div>
      </div>
    </div>,

      '',
    <div className="screenwrapper" key="page2">
      <div className="contentwrapper" id="mainScreen">
        <MainScreen />
      </div>
      <div className="buttonWrapper">
        <div className="button dark" onClick={(ev) => this.pageChange(3)}>Save a New Animal</div>
        <div className="button light" onClick={(ev) => this.pageChange(8)}>View Report</div>
      </div>
    </div>,

    <div className="screenwrapper timerdiv" key="page3">
      <div className="contentwrapper" id="timerScreen">
        <Timer />
      </div>
      <div className="buttonWrapper">
        <div className="button dark" onClick={(ev) => this.pageChange(4)}>Start</div>
        <div className="button light" onClick={(ev) => this.pageChange(2)}>Cancel</div>
      </div>
    </div>,
      '',
    <div className="screenwrapper" key="page5">
      <div className="contentwrapper" id="breathSession">
        <BreathSession pageChange={this.pageChange.bind(this)} />
      </div></div>,
      '',
    <div className="screenwrapper" style={{ opacity: 1 }} key="page7">
      <div className="contentwrapper" id="sessionDone">
        <SessionDone />
      </div>
      <div className="buttonWrapper">
        <div className="button dark" onClick={(ev) => this.pageChange(3)}>New Session</div>
        <div className="button outline" onClick={(ev) => this.pageChange(2)}>I'm good for today</div>
      </div>
    </div>,
    <div className="screenwrapper" key="page8">
    	<div className="backbutton" onClick={(ev) => this.pageChange(2)}>
      <svg className="icon" height="30" width="30">
        <path d="M25 5 L15 15 L25 25" fill="none" strokeWidth="3"/>
      </svg>	
				<div>Back</div></div>
      <div className="contentwrapper" id="report">
        <Report />
      </div>
    </div>,

    ];
  }
  pageChange(pagenum) {
    this.setState({ page: pagenum })
  }
  timerDone(timerdone) {
    this.setState({ timerdone: timerdone })
  }
  quitChange(quit) {
    this.setState({ quit: quit });
  }
  btnChange(btnstyle) {
    this.setState({ btnstyle: btnstyle })
  }



  afterTimer() {
    if (this.state.timerdone === 0) {
    }
    else {
      return <div className="rndbtn_wrapper">
        <div className="button dark" onClick={(ev) => { this.setState({ page: 5, timerdone: 0 }) }} >Blow the Balloon</div>
        <div className="button outline" onClick={(ev) => { this.setState({ page: 2 }) }} >I'll prepare one later</div>
      </div>

    }
  }

  pagerender() {

    switch (this.state.page) {
      case 1:
        return (<div className="screenwrapper" key="page1">
          <div className="contentwrapper" id="onBoarding">
            <Onboarding btnChange={this.btnChange.bind(this)} />
          </div>
          <div className="buttonWrapper">
            <div className="button dark" id="deactive" onClick={(ev) => this.pageChange(2)} style={this.state.btnstyle}>Get Started</div>
          </div>
        </div>);
      case 4:
        return (<div className="screenwrapper" key="page4">
          <div className="contentwrapper" id="session">
            <Session quitChange={this.quitChange.bind(this)} quitstat={this.state.quit} timerDone={this.timerDone.bind(this)} pageChange={this.pageChange.bind(this)}/>
          </div>
          <div className="buttonWrapper">
            {this.afterTimer()}
          </div>
        </div>);
      case 6:
        return (
          <div className="screenwrapper" key="page6" style={{ opacity: 1 }}>
            <div className="contentwrapper" id="saveAnimal">
              <SaveAnimal timerDone={this.timerDone.bind(this)} />
            </div>
            <div className="buttonWrapper">
              <div className="button dark confirmbtn" key="confirmbtn" style={{ opacity: this.state.timerdone }} onClick={(ev) => this.pageChange(7)}>Confirm</div>
            </div></div>);

      default: return this.page[this.state.page];
    }
  }
  render() {

    return (
        <div className="phone">
          {this.pagerender()}
        
        </div>
    );
  }
}

export default App;
