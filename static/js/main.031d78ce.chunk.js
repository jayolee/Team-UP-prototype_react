(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/red-panda-balloon.9eca0bbd.svg"},function(e,t,a){e.exports=a.p+"static/media/balloon.676f79fb.svg"},function(e,t,a){e.exports=a.p+"static/media/fin-whale.6971b768.svg"},function(e,t,a){e.exports=a.p+"static/media/bkspmonkey.91e0ed05.svg"},function(e,t,a){e.exports=a.p+"static/media/polarbear.4880652c.png"},function(e,t,a){e.exports=a.p+"static/media/red panda.a7b7a280.svg"},function(e,t,a){e.exports=a.p+"static/media/ocean.3b4b6ab3.svg"},function(e,t,a){e.exports=a.p+"static/media/report_week.7cdb839e.svg"},,,function(e,t,a){e.exports=a.p+"static/media/yellow-blob.9faa0785.svg"},function(e,t,a){e.exports=a.p+"static/media/timer.a4f88931.svg"},function(e,t,a){e.exports=a.p+"static/media/emperor-penguin.3656dc00.svg"},function(e,t,a){e.exports=a.p+"static/media/narwhal.4f9c8e10.svg"},function(e,t,a){e.exports=a.p+"static/media/balloon2.802aa7d9.svg"},function(e,t,a){e.exports=a.p+"static/media/flash.23f6f07f.svg"},function(e,t,a){e.exports=a.p+"static/media/polarbear.b0be6593.svg"},function(e,t,a){e.exports=a.p+"static/media/expand.4e43a173.svg"},function(e,t,a){e.exports=a.p+"static/media/report_bg.51671d6e.svg"},function(e,t,a){e.exports=a.p+"static/media/report_day.e3aeffb0.svg"},function(e,t,a){e.exports=a.p+"static/media/report_month.61ce5a52.svg"},function(e,t,a){e.exports=a.p+"static/media/report_year.ed7bcece.svg"},function(e,t,a){e.exports=a(40)},,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(17),r=a.n(s),c=(a(36),a(1)),l=a(2),o=a(5),m=a(3),d=a(4),u=a(6),h=(a(7),a(8)),p=a.n(h),v=a(18),g=a.n(v),b=a(19),y=a.n(b),f=a(9),E=a.n(f),k=a(10),N=a.n(k),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={left:[0,-373,750],curnumber:0,btnstyle:"",scwidth:0},a.toNext=a.toNext.bind(Object(u.a)(Object(u.a)(a))),a.toPrev=a.toPrev.bind(Object(u.a)(Object(u.a)(a))),a.cards=[{title:"Welcome to Up!",img:p.a,imgid:"red_panda",explanation:i.a.createElement("div",{className:"explanation "},i.a.createElement("p",null,"Welcome to Up!"),i.a.createElement("p",null," With Up, you will practice maintaining the most effective concentration time of 90 minutes while saving endangered animal friends! "))},{title:"Focused Time",img:y.a,imgid:"timer",explanation:i.a.createElement("div",{className:"explanation "},i.a.createElement("p",null,"Malcom Gladwell states that becoming a master of something requires 10,000 hours of practice "),i.a.createElement("p",null,"We will make our first step towards 1,000 hours with a maximum of 90 minutes each session."),i.a.createElement("p",null,"We will keep records of your sessions to let you about your progress."))},{title:"Controlled Breathing",img:E.a,imgid:"balloon_on",explanation:i.a.createElement("div",{className:"explanation "},i.a.createElement("p",null,"After each session, you will be led to a short breathing exercise that will help you relax and restore brain resources."),i.a.createElement("p",null,"You will be rewarded with a balloon after each breathing exercises, which you can use to help escort endangered animals to your island."))},{title:"Endangered Species",img:N.a,imgid:"whale",explanation:i.a.createElement("div",{className:"explanation "},i.a.createElement("p",null,"You will be rewarded with an endangered animal once you have collected enough balloons. These animals will be relaxing at your island so make sure to visit them often!"),i.a.createElement("p",null,"Are you ready to begin? Let\u2019s get to it! "))}],a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("screenwrapper")[0];setTimeout(function(){e.style.opacity=1},1);var t=document.getElementsByClassName("phone")[0];t=t.offsetWidth,this.setState({scwidth:t,left:[0,-1*t+2,2*t]})}},{key:"toNext",value:function(){var e=document.getElementsByClassName("nav-dot"),t=this.state.curnumber;t<3&&(this.setState({curnumber:this.state.curnumber+1,left:[this.state.left[0]-this.state.scwidth,this.state.left[1]-this.state.scwidth,this.state.left[2]-this.state.scwidth]}),t+=1,e[this.state.curnumber+1].classList.add("active"),3===t&&(this.props.btnChange({display:"block"}),setTimeout(this.props.btnChange({display:"block",opacity:"1"}),400)))}},{key:"toPrev",value:function(){var e=document.getElementsByClassName("nav-dot"),t=this.state.curnumber;t>0&&(this.setState({curnumber:this.state.curnumber-1,left:[this.state.left[0]+this.state.scwidth,this.state.left[1]+this.state.scwidth,this.state.left[2]+this.state.scwidth]}),e[(t-=1)+1].classList.remove("active"),3===t&&(this.props.btnChange({opacity:"0"}),setTimeout(function(){this.props.btnChange({display:"none"})},3e3)))}},{key:"generateCards",value:function(){for(var e=[],t=0;t<this.cards.length;t++)e.push(i.a.createElement("div",{className:"card_wrapper",key:"cardwrap"+t},i.a.createElement("div",{className:"onboardcard",key:"card"+t},i.a.createElement("div",{className:"title",key:"cardtitle"+t},this.cards[t].title),i.a.createElement("img",{id:this.cards[t].imgid,src:this.cards[t].img,key:"cardimg"+t,alt:"Onboarding Card"+t}),this.cards[t].explanation)));return e}},{key:"generateblobs",value:function(){for(var e=[],t=0;t<3;t++){var a="yellow"+(t+1);e.push(i.a.createElement("img",{className:"yellowblob",alt:"Background pattern",key:a,id:a,src:g.a,style:{left:this.state.left[t]}}))}return e}},{key:"generatedots",value:function(){var e=[];e.push(i.a.createElement("div",{className:"nav-dot active",key:"dot0"}));for(var t=0;t<3;t++)e.push(i.a.createElement("div",{className:"nav-dot",key:"dot"+t+1}));return e}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"btn next",onClick:this.toNext}),i.a.createElement("div",{className:"btn prev",onClick:this.toPrev}),this.generateblobs(),i.a.createElement("div",{className:"card_row",key:"card_row",style:{left:this.state.left[0]}},this.generateCards()),i.a.createElement("div",{id:"wrap_nav-dot"},this.generatedots()))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={poppage:0,time:0,dotstyle:{transform:0},ontouch:0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("screenwrapper")[0];setTimeout(function(){e.style.opacity=1},1)}},{key:"timercontrol",value:function(e){var t=this,a=function(e){var a=0,n=0,i=[window.innerWidth/2,288],s=e.clientX,r=e.clientY;void 0!==e.touches&&(s=e.touches[0].clientX,r=e.touches[0].clientY);var c=0,l=0;l<=i[1]?(l=i[1]-r,c=s-i[0]>=0?s-i[0]:i[0]-s,a=180*Math.atan2(l,c)/Math.PI,a=40*Math.round(a/40),s-i[0]>=0?a=90-a:a+=270,n=Math.round(a/40)):(l=r-i[1],c=s-i[0]>=0?s-i[0]:i[0]-s,a=180*Math.atan2(l,c)/Math.PI,a=180-(a=Math.abs(40*Math.round(a/40))),n=10*Math.round(a/40)),t.setState({time:n,dotstyle:{transform:"rotate("+a+"deg)"}})};document.addEventListener("mousemove",a),document.addEventListener("mouseup",function(e){document.removeEventListener("mousemove",a)}),document.addEventListener("touchmove",a),document.addEventListener("touchend",function(e){document.removeEventListener("touchmove",a)})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"time_control",key:"knobbox",style:this.state.dotstyle},i.a.createElement("div",{className:"dots",id:"knob",key:"knob",onMouseDown:this.timercontrol.bind(this),onTouchMove:this.timercontrol.bind(this)})),i.a.createElement("div",{id:"settime",key:"settime"},this.state.time,"0:00"),i.a.createElement("div",{className:"time"}))}}]),t}(n.Component),x=a(11),O=a.n(x),j=a(12),_=a.n(j),S=a(13),T=a.n(S),B=a(20),M=a.n(B),D=a(21),W=a.n(D),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={opacity:0,cursor:"inherit"},a.cursors=["inherit","pointer"],a.animals=[O.a,_.a,T.a,N.a,M.a,W.a],a.rannum=Math.floor(5*Math.random()),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("screenwrapper")[0];setTimeout(function(){e.style.opacity=1},1)}},{key:"mainContent",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"sectitle"},"Welcome ",i.a.createElement("span",{className:"name"},"Young"),"!"),i.a.createElement("div",{className:"titleimg"},i.a.createElement("img",{key:"mainimg",alt:"Animal",src:this.animals[this.rannum]})),i.a.createElement("div",{className:"communitycard",key:"commcard",style:this.state,onClick:function(t){return e.setState({opacity:0,cursor:"inherit"})}},i.a.createElement("div",{className:"title"},"1890hr/2000hr"),i.a.createElement("div",{className:"explanation "},i.a.createElement("br",null),"We calculate the total time of our commmunity spend focusing. Once the time hits a certain checkpoint, we will make a donation to WWF to help with habitat conservation and education. ")))}},{key:"cardview",value:function(){this.setState({opacity:1*!this.state.opacity,cursor:this.cursors[1*!this.state.opacity]})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"barwrapper sc2",key:"barwrapper",onClick:this.cardview.bind(this)},i.a.createElement("svg",{id:"bar2",height:"10",width:"260"},i.a.createElement("line",{x1:"0",y1:"0",x2:"260",y2:"0"})),i.a.createElement("svg",{id:"bar",height:"10",width:"260"},i.a.createElement("line",{x1:"0",y1:"0",x2:"260",y2:"0"}))),i.a.createElement("div",{className:"leftover_wrap",key:"leftover_wrap",onClick:this.cardview.bind(this)},i.a.createElement("div",{id:"community"}),i.a.createElement("div",{id:"commu_title"},"Community"),i.a.createElement("div",{id:"totaltime"},"2000hr")),this.mainContent())}}]),t}(n.Component),q=a(14),P=a.n(q),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={poppage:0,done:0,timer_hr:0,timer_mn:5,isPaused:0,greybox:{opacity:0,display:"none"}},a.quitDisplay=["none","block"],a.congmsg=[i.a.createElement("div",{className:"sectitle timersc"},"Congratulations! You\u2019ve saved an animal :)"),i.a.createElement("div",{className:"sectitle timersc des"},"You would need balloons to lift this animal up once it\u2019s saved. Make a balloon now?")],a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.ticking=setInterval(function(){this.refreshTimer()}.bind(this),1e3);var e=document.getElementsByClassName("screenwrapper")[0];setTimeout(function(){e.style.opacity=1},1)}},{key:"refreshTimer",value:function(){0===this.state.isPaused&&(this.setState({timer_mn:this.state.timer_mn-1}),0===this.state.timer_mn&&(this.props.timerDone(1),this.setState({done:1}),clearInterval(this.ticking)))}},{key:"timerDoneTitle",value:function(){if(0!==this.state.done)return this.congmsg[0]}},{key:"timerDoneDes",value:function(){if(0!==this.state.done)return this.congmsg[1]}},{key:"quitChange",value:function(e){var t=document.getElementsByTagName("circle")[0];1===e?t.classList.add("paused"):t.classList.remove("paused"),this.setState({isPaused:e,greybox:{opacity:1*!e,display:this.quitDisplay[e]}}),setTimeout(function(){this.setState({greybox:{opacity:e,display:this.quitDisplay[e]}})}.bind(this),10)}},{key:"quitMsg",value:function(){var e=this;if(0!==this.state.quit)return i.a.createElement("div",{className:"alert"},"Are you sure to quit? The animal is waiting for you to save ;(",i.a.createElement("div",{className:"btn_wrapper"},i.a.createElement("div",{className:"button dark",onClick:function(t){return e.quitChange(0)}},"Go back to saving animal"),i.a.createElement("div",{className:"button outline",onClick:function(t){return e.props.pageChange(2)}},"Save the animal another time")))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.timerDoneTitle(),i.a.createElement("div",{className:"countwrapper"},i.a.createElement("svg",{className:"ocean"},i.a.createElement("circle",{r:"138",cx:"150",cy:"150"})),i.a.createElement("div",{className:"timerwrapper"}),i.a.createElement("div",{className:"timer_focus"},i.a.createElement("img",{src:P.a,alt:"Background"}),i.a.createElement("div",{className:"settime",key:"time"},"00:0",this.state.timer_mn))),i.a.createElement("div",{className:"rndbtn_wrapper"}," ",i.a.createElement("div",{id:"quit",key:"quitbtn",onClick:function(t){e.quitChange(1)},className:"button outline",style:{opacity:1*!this.state.done}},"Quit")),i.a.createElement("div",{id:"greybox",key:"greybox",style:this.state.greybox},this.quitMsg()),this.timerDoneDes())}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={inhale:"Inhale",done:0,bln_width:54,bln_top:228},a.inhaleStat=["Inhale","Hold","Exhale"],a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("screenwrapper")[0];setTimeout(function(){e.style.opacity=1},1),this.refreshTimer();var t=0;this.ticking=setInterval(function(){3===(t+=1)&&(clearInterval(this.ticking),this.props.pageChange(6)),this.refreshTimer()}.bind(this),9e3)}},{key:"refreshTimer",value:function(){this.setState({inhale:this.inhaleStat[0]}),setTimeout(function(){this.setState({inhale:this.inhaleStat[1]})}.bind(this),3500),setTimeout(function(){this.setState({inhale:this.inhaleStat[2],bln_width:this.state.bln_width+50,bln_top:this.state.bln_top-20})}.bind(this),5500)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"sectitle",key:"sectitle"},this.state.inhale),i.a.createElement("div",{className:"timer"},i.a.createElement("svg",{className:"bln_circle timercir"},i.a.createElement("circle",{r:"133",cx:"140",cy:"140"})),i.a.createElement("svg",{className:"bln_circle blk"},i.a.createElement("circle",{r:"133",cx:"140",cy:"140"})),i.a.createElement("svg",{className:"bln_circle"},i.a.createElement("circle",{r:"133",cx:"140",cy:"140"})),i.a.createElement("div",{className:"dots",id:"inhale"}),i.a.createElement("div",{className:"dots",id:"hold"}),i.a.createElement("div",{className:"settimes blnwrapper",style:{top:this.state.bln_top}},i.a.createElement("img",{id:"balloon",alt:"balloon",src:E.a,style:{width:this.state.bln_width}}))))}}]),t}(n.Component),A=a(22),U=a.n(A),R=a(23),G=a.n(R),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={anim:"none",ttl_opacity:1,done:0,flash_op:0,bln:1,cardop:0,bln_width:204},a.inhaleStat=["Inhale","Hold","Exhale"],a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refreshTimer()}},{key:"refreshTimer",value:function(){setTimeout(function(){this.setState({ttl_opacity:0,anim:"floating linear 3s forwards"})}.bind(this),1e3),setTimeout(function(){this.setState({flash_op:1,bln:0})}.bind(this),4300),setTimeout(function(){this.setState({cardop:1}),this.props.timerDone(1)}.bind(this),4900)}},{key:"render",value:function(){return i.a.createElement("div",{key:"savingAnimal",style:{animation:this.state.anim}},i.a.createElement("div",{className:"sectitle",key:"sectitle",style:{opacity:this.state.ttl_opacity}},"Oh?"),i.a.createElement("div",{className:"blnwrapper save",style:{opacity:this.state.bln}},i.a.createElement("img",{id:"balloon",alt:"balloon",key:"balloon",src:U.a,style:{width:this.state.bln_width}})),i.a.createElement("div",{className:"saveanimal"},i.a.createElement("img",{alt:"Polar Bear",src:_.a})),i.a.createElement("img",{id:"flash",alt:"flash",key:"flash",src:G.a,style:{opacity:this.state.flash_op}}),i.a.createElement("div",{className:"endangercard",key:"enCard",style:{opacity:this.state.cardop}},i.a.createElement("div",{className:"title"},"Polar Bear"),i.a.createElement("div",{className:"explanation"},"Because of ongoing and potential loss of their sea ice habitat resulting from climate change, polar bears were listed as a threatened species in the US under the Endangered Species Act in May 2008.")))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("screenwrapper")[0];setTimeout(function(){e.style.opacity=1},1)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"sectitle status"},"You're now 30 minutes from saving the animal!"),i.a.createElement("div",{className:"countwrapper"},i.a.createElement("div",{className:"timerwrapper"},i.a.createElement("div",{className:"timer_focus"},i.a.createElement("img",{src:P.a,alt:"Background"})))),i.a.createElement("div",{className:"barwrapper"},i.a.createElement("svg",{id:"bar2",height:"10",width:"260"},i.a.createElement("line",{x1:"0",y1:"0",x2:"260",y2:"0"})),i.a.createElement("svg",{id:"bar",height:"10",width:"260"},i.a.createElement("line",{x1:"0",y1:"0",x2:"260",y2:"0"}))),i.a.createElement("div",{className:"leftover_wrap"},i.a.createElement("div",{id:"lefttime"},"1hr"),i.a.createElement("div",{id:"totaltime"},"1.5hr")))}}]),t}(n.Component),J=a(24),X=a.n(J),Q=a(25),V=a.n(Q),$=a(26),z=a.n($),K=a(27),Z=a.n(K),ee=a(15),te=a.n(ee),ae=a(28),ne=a.n(ae),ie=a(29),se=a.n(ie),re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={poppage:0,big:0,otherop:1,biggerClass:"island",greybox:{opacity:0,display:"none"},timeop:1,timeimg:te.a,day:"This Week",total:i.a.createElement("span",null,"Total ",i.a.createElement("span",{className:"bold"},"11.5")," hr")},a.timeinfo={day:[Z.a,"","Today"],week:[te.a,i.a.createElement("span",null,"Total ",i.a.createElement("span",{className:"bold"},"11.5")," hr"),"This Week"],month:[ne.a,i.a.createElement("span",null,"Total ",i.a.createElement("span",{className:"bold"},"24")," hr"),"This Month"],year:[se.a,i.a.createElement("span",null,"Total ",i.a.createElement("span",{className:"bold"},"704")," hr"),"This year"]},a.timekey=["day","week","month","year"],a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("screenwrapper")[0];setTimeout(function(){e.style.opacity=1},1),this.refs.island.scrollLeft=203}},{key:"addBigger",value:function(){var e=document.getElementsByClassName("backbutton")[0];this.state.big?(this.setState({biggerClass:"island",big:0,otherop:1}),e.style.opacity=1,setTimeout(function(){this.refs.island.scrollLeft=203}.bind(this),100)):(this.setState({biggerClass:"island bigger",big:1,otherop:0}),e.style.opacity=0)}},{key:"rmBigger",value:function(){var e=document.getElementsByClassName("backbutton")[0];this.state.big&&(this.setState({biggerClass:"island",big:0,otherop:1}),e.style.opacity=1,setTimeout(function(){this.refs.island.scrollLeft=203}.bind(this),100))}},{key:"datePicker",value:function(e){for(var t=e.target.id,a="",n=0;n<4;n++)a=document.getElementById(this.timekey[n]),t===this.timekey[n]?a.classList.add("active"):a.classList.remove("active");this.setState({total:this.timeinfo[t][1],timeimg:this.timeinfo[t][0],day:this.timeinfo[t][2]})}},{key:"render",value:function(){return i.a.createElement("div",{onClick:this.rmBigger.bind(this)},i.a.createElement("div",{className:"report_section"},i.a.createElement("div",{className:"title",key:"islandTitle",style:{opacity:this.state.otherop}},"My Island ",i.a.createElement("img",{id:"expand",alt:"Expand Button",src:V.a,onClick:this.addBigger.bind(this)})),i.a.createElement("div",{className:this.state.biggerClass,key:"island",ref:"island"},i.a.createElement("div",{className:"land"},i.a.createElement("div",{className:"animaldiv"},i.a.createElement("img",{id:"rpda",alt:"Red Panda",src:T.a}),i.a.createElement("img",{id:"bksm",alt:"Black Spider Monkey",src:O.a}),i.a.createElement("img",{id:"pbr",alt:"Polar Bear",src:X.a}))))),i.a.createElement("div",{className:"report_section",id:"graph",key:"graph",style:{opacity:this.state.otherop}},i.a.createElement("div",{className:"title"},"Session Report"),i.a.createElement("div",{className:"date"},i.a.createElement("div",{className:"datepicker",onClick:this.datePicker.bind(this),id:"day"},"Day"),i.a.createElement("div",{className:"datepicker active",onClick:this.datePicker.bind(this),id:"week"},"Week"),i.a.createElement("div",{className:"datepicker",onClick:this.datePicker.bind(this),id:"month"},"Month"),i.a.createElement("div",{className:"datepicker",onClick:this.datePicker.bind(this),id:"year"},"Year")),i.a.createElement("div",{className:"weekrow"},i.a.createElement("div",{className:"arrow_button"},i.a.createElement("svg",{className:"icon",height:"12",width:"12"},i.a.createElement("path",{d:"M12 0 L6 6 L12 12",fill:"none",strokeWidth:"3"}))),i.a.createElement("div",{className:"week",key:"dayinfo"},this.state.day)),i.a.createElement("div",{className:"reportcard"},i.a.createElement("img",{alt:"report background",src:z.a}),i.a.createElement("img",{id:"reporttype",alt:"report",src:this.state.timeimg,key:"reporttype"})),i.a.createElement("div",{className:"timeinfo",key:"totaltime",style:{opacity:this.state.timeop}},this.state.total)))}}]),t}(n.Component),ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={page:0,btnstyle:{},prototype:0,quit:0,timerdone:0},a.page=[i.a.createElement("div",{className:"screenwrapper",style:{opacity:1},key:"page0"},i.a.createElement("div",{className:"contentwrapper",id:"topScreen"},i.a.createElement("div",{className:"titleimg"},i.a.createElement("img",{id:"welcome",alt:"Red Panda",src:p.a}),i.a.createElement("div",{className:"sectitle"},"Welcome to Up!"))),i.a.createElement("div",{className:"buttonWrapper"},i.a.createElement("div",{className:"button dark",onClick:function(e){return a.pageChange(1)}},"Log In"),i.a.createElement("div",{className:"button light"},"Sign Up"))),"",i.a.createElement("div",{className:"screenwrapper",key:"page2"},i.a.createElement("div",{className:"contentwrapper",id:"mainScreen"},i.a.createElement(L,null)),i.a.createElement("div",{className:"buttonWrapper"},i.a.createElement("div",{className:"button dark",onClick:function(e){return a.pageChange(3)}},"Save a New Animal"),i.a.createElement("div",{className:"button light",onClick:function(e){return a.pageChange(8)}},"View Report"))),i.a.createElement("div",{className:"screenwrapper timerdiv",key:"page3"},i.a.createElement("div",{className:"contentwrapper",id:"timerScreen"},i.a.createElement(C,null)),i.a.createElement("div",{className:"buttonWrapper"},i.a.createElement("div",{className:"button dark",onClick:function(e){return a.pageChange(4)}},"Start"),i.a.createElement("div",{className:"button light",onClick:function(e){return a.pageChange(2)}},"Cancel"))),"",i.a.createElement("div",{className:"screenwrapper",key:"page5"},i.a.createElement("div",{className:"contentwrapper",id:"breathSession"},i.a.createElement(Y,{pageChange:a.pageChange.bind(Object(u.a)(Object(u.a)(a)))}))),"",i.a.createElement("div",{className:"screenwrapper",style:{opacity:1},key:"page7"},i.a.createElement("div",{className:"contentwrapper",id:"sessionDone"},i.a.createElement(H,null)),i.a.createElement("div",{className:"buttonWrapper"},i.a.createElement("div",{className:"button dark",onClick:function(e){return a.pageChange(3)}},"New Session"),i.a.createElement("div",{className:"button outline",onClick:function(e){return a.pageChange(2)}},"I'm good for today"))),i.a.createElement("div",{className:"screenwrapper",key:"page8"},i.a.createElement("div",{className:"backbutton",onClick:function(e){return a.pageChange(2)}},i.a.createElement("svg",{className:"icon",height:"30",width:"30"},i.a.createElement("path",{d:"M25 5 L15 15 L25 25",fill:"none",strokeWidth:"3"})),i.a.createElement("div",null,"Back")),i.a.createElement("div",{className:"contentwrapper",id:"report"},i.a.createElement(re,null)))],a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"pageChange",value:function(e){this.setState({page:e})}},{key:"timerDone",value:function(e){this.setState({timerdone:e})}},{key:"quitChange",value:function(e){this.setState({quit:e})}},{key:"btnChange",value:function(e){this.setState({btnstyle:e})}},{key:"afterTimer",value:function(){var e=this;if(0!==this.state.timerdone)return i.a.createElement("div",{className:"rndbtn_wrapper"},i.a.createElement("div",{className:"button dark",onClick:function(t){e.setState({page:5,timerdone:0})}},"Blow the Balloon"),i.a.createElement("div",{className:"button outline",onClick:function(t){e.setState({page:2})}},"I'll prepare one later"))}},{key:"pagerender",value:function(){var e=this;switch(this.state.page){case 1:return i.a.createElement("div",{className:"screenwrapper",key:"page1"},i.a.createElement("div",{className:"contentwrapper",id:"onBoarding"},i.a.createElement(w,{btnChange:this.btnChange.bind(this)})),i.a.createElement("div",{className:"buttonWrapper"},i.a.createElement("div",{className:"button dark",id:"deactive",onClick:function(t){return e.pageChange(2)},style:this.state.btnstyle},"Get Started")));case 4:return i.a.createElement("div",{className:"screenwrapper",key:"page4"},i.a.createElement("div",{className:"contentwrapper",id:"session"},i.a.createElement(I,{quitChange:this.quitChange.bind(this),quitstat:this.state.quit,timerDone:this.timerDone.bind(this),pageChange:this.pageChange.bind(this)})),i.a.createElement("div",{className:"buttonWrapper"},this.afterTimer()));case 6:return i.a.createElement("div",{className:"screenwrapper",key:"page6",style:{opacity:1}},i.a.createElement("div",{className:"contentwrapper",id:"saveAnimal"},i.a.createElement(F,{timerDone:this.timerDone.bind(this)})),i.a.createElement("div",{className:"buttonWrapper"},i.a.createElement("div",{className:"button dark confirmbtn",key:"confirmbtn",style:{opacity:this.state.timerdone},onClick:function(t){return e.pageChange(7)}},"Confirm")));default:return this.page[this.state.page]}}},{key:"render",value:function(){return i.a.createElement("div",{className:"phone"},this.pagerender())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[30,2,1]]]);
//# sourceMappingURL=main.031d78ce.chunk.js.map