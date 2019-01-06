import React, { Component } from 'react';
import balloon from './images/balloon2.svg'
import polarbear from './images/polarbear.png'
import flash from './images/flash.svg'
import './App.scss';

class SaveAnimal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anim: "none",
            ttl_opacity: 1,
            done: 0,
            flash_op: 0,
            bln: 1,
            cardop: 0,
            bln_width:204,
        }

        this.inhaleStat = ["Inhale", "Hold", "Exhale"];

    }

    componentDidMount() {
        this.refreshTimer();    
    }

    refreshTimer() {

        setTimeout(function () {
            this.setState({ ttl_opacity: 0, anim: "floating linear 3s forwards" });
        }.bind(this), 1000)
        setTimeout(function () {
            this.setState({
                flash_op: 1,
                bln: 0,
            })
        }.bind(this), 4300)
        setTimeout(function () {
            this.setState({
                cardop: 1,
            });
            this.props.timerDone(1);
        }.bind(this), 4900)

    }

    render() {
        return (
            <div key="savingAnimal" style={{ animation: this.state.anim }}>
                <div className="sectitle" key="sectitle" style={{ opacity: this.state.ttl_opacity }}>Oh?
                    </div>

                    <div className="blnwrapper save" style={{ opacity: this.state.bln }}><img id="balloon" alt="balloon" key= "balloon" src={balloon} style={{ width: this.state.bln_width }} /></div>
                    <div className="saveanimal">
                        <img alt="Polar Bear" src={polarbear} /></div>
                    <img id="flash" alt="flash" key="flash" src={flash} style={{ opacity: this.state.flash_op }} />
                    <div className="endangercard" key="enCard" style={{ opacity: this.state.cardop }}>
                        <div className="title">Polar Bear</div>
                        <div className="explanation">Because of ongoing and potential loss of their sea ice habitat resulting from climate change, polar bears were listed as a threatened species in the US under the Endangered Species Act in May 2008.</div>
                    </div>


            </div>
        );
    }
}

export default SaveAnimal;
