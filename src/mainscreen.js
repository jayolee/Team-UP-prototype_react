import React, { Component } from 'react';
import './App.scss';
import bkspmonkey from './images/bkspmonkey.svg'
import polarbear from './images/polarbear.png'
import red_panda from './images/red panda.svg'
import empr_penguin from './images/emperor-penguin.svg'
import narwhal from './images/narwhal.svg'
import finWhale from './images/fin-whale.svg'



class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            opacity:0,
            cursor: "inherit",
        }
        this.cursors=["inherit","pointer"]
        this.animals=[bkspmonkey, polarbear, red_panda, finWhale, empr_penguin, narwhal]
        this.rannum=Math.floor(Math.random() * 5);
        
    }
    componentDidMount(){

        let scwrapper=document.getElementsByClassName("screenwrapper")[0];
        setTimeout(function(){
            scwrapper.style.opacity=1;
        },1);
       
    }
    mainContent(){
            return (<div>
                <div className="sectitle">
                Welcome <span className="name">Young</span>!</div>
                <div className="titleimg">
                <img key="mainimg" alt="Animal" src={this.animals[this.rannum]}/></div>
                <div className="communitycard" key="commcard" style={this.state} onClick={(ev) => this.setState({opacity:0, cursor:"inherit"})} >
			  <div className="title">1890hr/2000hr</div>
            <div className="explanation "><br />We calculate the total time of our commmunity spend focusing. Once the time hits a certain checkpoint, we will make a donation to WWF to help with habitat conservation and education. </div>
          </div>
            </div>)
    }
   cardview(){
    this.setState({opacity:!(this.state.opacity) * 1, cursor:this.cursors[!(this.state.opacity) * 1]});
   }
    render() {
        return (
            <div>
                <div className="barwrapper sc2" key="barwrapper" onClick={this.cardview.bind(this)}>
		<svg id="bar2" height="10" width="260">
			
			<line x1="0" y1="0" x2="260" y2="0"></line></svg>
			<svg id="bar" height="10" width="260">
			
			<line x1="0" y1="0" x2="260" y2="0"></line></svg>
			
			</div>
				<div className="leftover_wrap" key="leftover_wrap" onClick={this.cardview.bind(this)}>
				<div id="community" />
					<div id="commu_title">Community</div>
				<div id="totaltime">2000hr</div>
			
			</div>
            {this.mainContent()}
            </div>
        );
    }
}

export default MainScreen;
