import React, { Component } from 'react';
import './App.scss';
import main_red_panda from './images/red-panda-balloon.svg'
import yellow from './images/yellow-blob.svg'
import timer from './images/timer.svg'
import balloon from './images/balloon.svg'
import finWhale from './images/fin-whale.svg'


class Onboarding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: [0, -373, 750],
            curnumber: 0,
            btnstyle:'',
            scwidth:0,
        }
        this.toNext=this.toNext.bind(this);
        this.toPrev=this.toPrev.bind(this);
        this.cards=[{
            title: "Welcome to Up!",
            img:main_red_panda,
            imgid:'red_panda',
            explanation:
            <div className="explanation ">
            <p>Welcome to Up!</p>
            <p> With Up, you will practice maintaining the most effective concentration time of 90 minutes while saving endangered animal friends! </p>
            </div>,
        },
        {
            title: "Focused Time",
            img:timer,
            imgid:'timer',
            explanation:<div className="explanation ">
                <p>
            Malcom Gladwell states that becoming a master of something requires 10,000 hours of practice </p>
            <p>
                We will make our first step towards 1,000 hours with a maximum of 90 minutes each session.</p>
            <p>
                We will keep records of your sessions to let you about your progress.
                </p>
</div>,
        },
        {
            title: "Controlled Breathing",
            img:balloon,
            imgid:'balloon_on',
            explanation:
            <div className="explanation "><p>After each session, you will be led to a short breathing exercise that will help you relax and restore brain resources.</p>
            <p>You will be rewarded with a balloon after each breathing exercises, which you can use to help escort endangered animals to your island.</p>
            </div>,
        
        },
        {
            title: "Endangered Species",
            img:finWhale,
            imgid:'whale',
            explanation:<div className="explanation ">
            <p>You will be rewarded with an endangered animal once you have collected enough balloons. These animals will be relaxing at your island so make sure to visit them often!
            </p>
            <p>Are you ready to begin? Let’s get to it! </p>
            </div>,
        }]
    }

    componentDidMount(){

        let scwrapper=document.getElementsByClassName("screenwrapper")[0];
        setTimeout(function(){
            scwrapper.style.opacity=1;
        },1);

        let scwidth=document.getElementsByClassName("phone")[0];
        scwidth=scwidth.offsetWidth;
        this.setState({scwidth: scwidth, left: [0, (-1 * scwidth)+ 2, scwidth*2]})
       
    }
    toNext() {
        let nav_dot = document.getElementsByClassName("nav-dot");
        let curnumber=this.state.curnumber;
        //move card and yellow blob to left
        if (curnumber < 3) {
            this.setState({curnumber: (this.state.curnumber + 1), left: [this.state.left[0]-this.state.scwidth,this.state.left[1]-this.state.scwidth,this.state.left[2]-this.state.scwidth]});
            //make the right dot as grey(active)
            curnumber += 1 ;

            nav_dot[this.state.curnumber+1].classList.add('active');
            //nav_dot[this.state.curnumber - 1].classList.remove('active');

            //activate the button if this is the last slide
            if (curnumber === 3) {
                this.props.btnChange({'display': 'block'})
    
                setTimeout(
                    this.props.btnChange({'display': 'block', 'opacity':'1'})
                , 400);
            }
        }
    }

    toPrev() {
        let nav_dot = document.getElementsByClassName("nav-dot");
        let curnumber=this.state.curnumber;
        //move card and yellow blob to right
        if (curnumber > 0) {
            this.setState({curnumber:this.state.curnumber -1, left: [this.state.left[0]+this.state.scwidth, this.state.left[1]+this.state.scwidth, this.state.left[2]+this.state.scwidth]});
            curnumber -= 1;
            //make the right dot as grey(active)
            nav_dot[curnumber+1].classList.remove('active');
            //nav_dot[curnumber + 1].classList.remove('active');

            //activate the button if this is the last slide
            if (curnumber === 3) {
                this.props.btnChange({'opacity': '0'})
                setTimeout(function () {
                    this.props.btnChange({'display': 'none'})
                }, 3000);
            }
        }
    }

    //card render
    generateCards(){
       let element=[];
        for(let i=0;i<this.cards.length;i++){
            element.push(<div className="card_wrapper" key={"cardwrap"+i}>
            <div className="onboardcard" key={"card"+i}>
                <div className="title" key={"cardtitle"+i}>{this.cards[i].title}</div>
                <img id={this.cards[i].imgid} src={this.cards[i].img} key={"cardimg"+i} alt={"Onboarding Card"
                +i}/>
                 {this.cards[i].explanation}
                
            </div>
        </div>)
        }
    return element;
    }

    //blob render
    generateblobs(){
        let element=[];
        for(let i=0;i<3;i++){
            let idname="yellow"+(i+1);
            element.push(
                <img className="yellowblob" alt="Background pattern" key={idname} id={idname} src={yellow} style={{left:this.state.left[i]}}/>
            )
        }
        return element;
    }
    generatedots(){
        let element=[];
        element.push(
            <div className="nav-dot active" key="dot0"></div>
        )
        for(let i=0;i<3;i++){
            element.push(
                <div className="nav-dot" key={"dot"+i+1}></div>
            )
        }
        return element;
    }
    render() {
        return (
            <div>
                <div className="btn next"  onClick={this.toNext} />
                <div className="btn prev" onClick={this.toPrev} />
                {this.generateblobs()}
                <div className="card_row" key="card_row" style={{left:this.state.left[0]}}>
                    {this.generateCards()}
                </div>
                <div id="wrap_nav-dot">
                    {this.generatedots()}
                </div>
                    
            </div>
        );
    }
}

export default Onboarding;
