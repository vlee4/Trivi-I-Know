(this["webpackJsonptrivi-i-know"]=this["webpackJsonptrivi-i-know"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"question":"What was Tandem previous name?","incorrect":["Tandem","Burger Shack","Extraordinary Humans"],"correct":"Devmynd"},{"question":"In Shakespeare\'s play Julius Caesar, Caesar\'s last words were...","incorrect":["Iacta alea est!","Vidi, vini, vici","Aegri somnia vana"],"correct":"Et tu, Brute?"},{"question":"A group of tigers are referred to as:","incorrect":["Chowder","Pride","Destruction"],"correct":"Ambush"},{"question":"What is the top speed an average cat can travel?","incorrect":["42 mph","13 mph","9 mph"],"correct":"31 mph"},{"question":"A cat can jump to _____ times its own height:","incorrect":["3","9","7"],"correct":"5"},{"question":"What is the only letter that doesn\'t appear in a US state name?","incorrect":["M","Z","X"],"correct":"Q"},{"question":"What is the name for a cow-bison hybrid?","incorrect":["Cowson","Bicow","Mooson"],"correct":"Beefalo"},{"question":"What is the largest freshwater lake in the world?","incorrect":["Lake Baikal","Lake Michigan","Lake Victoria"],"correct":"Lake Superior"},{"question":"In a website address bar, what does WWW stand for?","incorrect":["Wild Wild West","War World Web"],"correct":"World Wide Web"},{"question":"In a game of bingo, what number is represented by the name two little ducks?","incorrect":["20","55","77"],"correct":"22"},{"question":"According to Greek mythology, who was the first woman on Earth?","incorrect":["Lilith","Eve","Hera"],"correct":"Pandora"},{"question":"In which European city would you find Orly airport?","incorrect":["London","Belgium","Munich"],"correct":"Paris"},{"question":"Where would you find the Sea of Tranquility?","incorrect":["California","Siberia","China"],"correct":"The Moon"},{"question":"Which artist painted \'Girl with a Pearl Earrin\'?","incorrect":["Van Gogh","Picasso","Da Vinci"],"correct":"Vermeer"},{"question":"What is the official name for the \'hashtag\' symbol?","incorrect":["Number sign","Hash Sign","Pound"],"correct":"Octothorpe"},{"question":"Not American at all, where is apple pie from?","incorrect":["Japan","Ethiopia","Canada"],"correct":"England"},{"question":"What is the national animal of Scotland?","incorrect":["Bear","Rabbit","Seal"],"correct":"Unicorn"},{"question":"Where in the world is the only place where Canada is *due south*","incorrect":["Alaska","Russia","Washington"],"correct":"Detroit"},{"question":"Approximately how many grapes go into a bottle of wine?","incorrect":["500","200","1000"],"correct":"700"},{"question":"How much does a US One Dollar Bill cost to make?","incorrect":["$0.25","$1","$5"],"correct":"$0.05"},{"question":"The Vatican bank has the only ATM in the world that allows users to do what?","incorrect":["Receive withdrawls in rosary beads","Vote for the Pope","Purchase indulgences"],"correct":"Perform transactions in Latin"}]')},30:function(e,t,n){},31:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),a=n.n(s),c=n(12),i=n.n(c),o=(n(30),n(6)),u=n(7),h=n(9),l=n(8),d=(n(31),n.p+"static/media/GitHub_Logo_White.6149aa5c.png"),b=n(4),p=n(3),m=n(2),j=n(18),g=n(10),O={QNum:0,QIdx:0,CurQ:{},Questions:[]},w="GET_QUESTIONS",v="GENERATE_QUESTION",f="NEXT_QUESTION",x="RESET_QUESTIONS",A=function(){return function(e){for(var t,n=new Set,r=0;r<10;){var s=Math.floor(Math.random()*g.length);n.has(s)||(n.add(s),r++)}e((t=Object(j.a)(n),{type:w,questions:t}))}},S=function(e){return function(t){try{for(var n=g[e],r=n.question,s=n.correct,a=n.incorrect,c=new Set,i=[s].concat(Object(j.a)(a));c.size<i.length;){var o=Math.floor(Math.random()*i.length);c.add(o)}var u=[];c.forEach((function(e){u.push(i[e])})),t(function(e){return{type:v,question:e}}({question:r,answers:u}))}catch(h){console.log("Error formatting questions",h)}}},N=function(e){return function(t){t(function(e){return{type:f,qNum:e}}(e))}},y=function(){return function(e){e({type:x})}};var Q=n(13),E="ACTIVATE_GAME",I="CHANGE_PHASE",k="CHECK_ANSWER",T="RESET_GAMESTATS",M=function(e){return function(t){t(function(e){return{type:E,name:e}}(e))}},W=function(e){return function(t){t(function(e){return{type:I,phase:e}}(e))}},B=function(e,t,n){return function(r){var s=g[t].correct,a=0;s===n&&a++,r(function(e,t,n,r){return{type:k,QNum:e,correct:t,answer:n,score:r}}(e,s,n,a))}},R=function(e,t){return function(n){n(function(){return{type:T,name:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",phase:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start"}}(e,t))}};var G=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={nameInput:"",disabled:!0},e.inputVal=a.a.createRef(),e.toggleButton=e.toggleButton.bind(Object(b.a)(e)),e.startGame=e.startGame.bind(Object(b.a)(e)),e}return Object(u.a)(n,[{key:"toggleButton",value:function(){var e=!this.inputVal.current.value.trim().length;this.setState({nameInput:this.inputVal,disabled:e})}},{key:"startGame",value:function(){try{this.props.fetchQuestions(),this.props.beginGame(this.inputVal.current.value)}catch(e){console.log("Error starting game:",e)}}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"start",children:[Object(r.jsx)("div",{children:"Welcome to Trivi-I-Know"}),Object(r.jsx)("div",{children:"Score board would go here"}),Object(r.jsxs)("div",{className:"playerInput",children:[Object(r.jsx)("label",{htmlFor:"name",children:"Player Name: "}),Object(r.jsx)("input",{name:"name",type:"text",placeholder:"Please enter your name",ref:this.inputVal,onChange:this.toggleButton}),Object(r.jsx)("button",{type:"button",disabled:this.state.disabled,onClick:this.startGame,children:"Start Game"})]})]})}}]),n}(a.a.Component),q=Object(p.b)(null,(function(e){return{fetchQuestions:function(){return e(A())},beginGame:function(t){return e(M(t))}}}))(G),C=n(11),D=n.n(C),Z=n(17),J=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={choice:"",submitted:!1},e.onChange=e.onChange.bind(Object(b.a)(e)),e.submitAnswer=e.submitAnswer.bind(Object(b.a)(e)),e.nextQ=e.nextQ.bind(Object(b.a)(e)),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(Z.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.props.getQ(this.props.QIdx);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Error getting question",e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e){this.setState({choice:e.target.value})}},{key:"submitAnswer",value:function(e){e.preventDefault(),this.props.check(this.props.QNum,this.props.QIdx,this.state.choice),this.setState({submitted:!0}),console.log("Submission value",this.state.choice)}},{key:"nextQ",value:function(){var e=Object(Z.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.QNum+1!==10){e.next=4;break}this.props.endRound("results"),e.next=15;break;case 4:return e.prev=4,e.next=7,this.props.nextQuest(this.props.QNum);case 7:return e.next=9,this.props.getQ(this.props.QIdx);case 9:this.setState({choice:"",submitted:!1}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("Error getting to next question",e.t0);case 15:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(console.log("PROPS",this.props),!this.props.curQuestion)return Object(r.jsx)("div",{className:"question",children:Object(r.jsx)("h2",{className:"loading",children:"Loading..."})});var t=this.props.curQuestion,n=t.question,s=t.answers,a=this.props.gameStats.answerSheet[this.props.QNum+1]?this.props.gameStats.answerSheet[this.props.QNum+1]:{},c=a.correct,i=a.myAnswer;return Object(r.jsxs)("div",{className:"question",children:[Object(r.jsxs)("div",{className:"topBanner",children:[Object(r.jsxs)("div",{children:["Question ",this.props.QNum+1,"/10"]}),Object(r.jsx)("div",{children:this.props.gameStats.playerName||""}),Object(r.jsxs)("div",{className:"navQuestions",children:[Object(r.jsx)("button",{children:"Previous"}),Object(r.jsx)("button",{onClick:this.nextQ,disabled:!this.state.submitted,children:"Next"})]})]}),Object(r.jsxs)("form",{className:"playerInput",onSubmit:this.submitAnswer,children:[Object(r.jsx)("h3",{className:"questionHeader",children:n||"Question"}),Object(r.jsx)("div",{className:"mappedAnswers",children:this.props.curQuestion.answers?s.map((function(t,n){return Object(r.jsxs)("div",{className:"answer",children:[Object(r.jsx)("input",{name:"answer",type:"radio",id:t,value:t,onChange:e.onChange,checked:e.state.choice===t}),Object(r.jsx)("label",{htmlFor:t,children:t})]},"ans_".concat(n))})):Object(r.jsx)("div",{className:"answer",children:"Loading"})}),Object(r.jsx)("button",{type:"submit",disabled:!this.state.choice.length||this.state.submitted,children:"Submit"})]}),Object(r.jsx)("div",{className:"answerCompare",children:c?Object(r.jsx)("div",{children:c===i?"Congrats, ".concat(c," is correct!"):"Sorry, ".concat(i," is wrong! The correct answer is ").concat(c,".")}):""})]})}}]),n}(a.a.Component),L=Object(p.b)((function(e){return{curQuestion:e.questions.CurQ,QNum:e.questions.QNum,QIdx:e.questions.QIdx,gameStats:e.gameStats}}),(function(e){return{getQ:function(t){return e(S(t))},check:function(t,n,r){return e(B(t,n,r))},nextQuest:function(t){return e(N(t))},endRound:function(t){return e(W(t))}}}))(J);var P=Object(p.b)((function(e){return{gameStats:e.gameStats}}),(function(e){return{resetGameStats:function(t,n){return e(R(t,n))},resetGameQuests:function(){return e(y())},fetchQuestions:function(){return e(A())}}}))((function(e){return Object(r.jsxs)("div",{className:"results",children:[Object(r.jsxs)("h2",{children:["Congratulations ",e.gameStats.playerName,"!"]}),Object(r.jsx)("h3",{children:"You're score is ".concat(e.gameStats.score,"/10")}),Object(r.jsxs)("div",{className:"answerSheet",children:[Object(r.jsx)("h3",{children:"Your Answers"}),Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"row",children:[Object(r.jsx)("th",{className:"row_left",colSpan:"1",children:"My Answers"}),Object(r.jsx)("th",{className:"row_right",colSpan:"1",children:"Correct Answers"})]})}),Object(r.jsx)("tbody",{children:e.gameStats.answerSheet?Object.values(e.gameStats.answerSheet).map((function(e,t){var n=e.myAnswer===e.correct?"correct_row":"incorrect_row";return Object(r.jsxs)("tr",{className:"row ".concat(n),children:[Object(r.jsx)("td",{className:"row_left",children:e.myAnswer}),Object(r.jsx)("td",{className:"row_right",children:e.correct})]},"Ans_Entry_".concat(t))})):""})]})]}),Object(r.jsxs)("div",{className:"resultBtns",children:[Object(r.jsx)("button",{onClick:function(){console.log("Let's start a new game, switch players!"),e.resetGameStats(),e.resetGameQuests()},children:"Return to Start"}),Object(r.jsx)("button",{onClick:function(){console.log("Let's play another round"),e.resetGameStats(e.gameStats.playerName,"questions"),e.resetGameQuests(),e.fetchQuestions()},children:"Restart game"})]})]})})),U=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=(this.props?this.props.gameStats:null).phase;return this.props.gameStats.phase?Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{id:"gameName",children:"Trivi-I-Know"}),"start"===e?Object(r.jsx)(q,{}):"questions"===e?Object(r.jsx)(L,{}):Object(r.jsx)(P,{}),Object(r.jsx)("footer",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"Last Updated: November 2020"}),Object(r.jsx)("div",{children:Object(r.jsxs)("a",{href:"https://github.com/vlee4/Trivi-I-Know",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",alt:"GH_Logo"}),Object(r.jsx)("img",{src:d,alt:"Github",style:{width:"5%",height:"auto"}})]})}),Object(r.jsx)("div",{children:"Created by vLEE"})]})})]}):Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{id:"gameName",children:"Trivi-I-Know"}),Object(r.jsx)("h2",{className:"loading",children:"Loading..."})]})}}]),n}(a.a.Component),Y=Object(p.b)((function(e){return{questions:e.questions,gameStats:e.gameStats}}))(U),H=n(5),V=n(22),F=n(23),X=n(24),z=Object(H.combineReducers)({questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(m.a)(Object(m.a)({},e),{},{Questions:t.questions,QIdx:t.questions[0]});case v:return Object(m.a)(Object(m.a)({},e),{},{CurQ:t.question});case f:var n=e.Questions[t.qNum+1];return Object(m.a)(Object(m.a)({},e),{},{QNum:t.qNum+1,QIdx:n});case x:return{QNum:0,QIdx:0,CurQ:{},Questions:[]};default:return e}},gameStats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{score:0,playerName:"",phase:"start",answerSheet:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var n=t.name?t.name:e.name;return Object(m.a)(Object(m.a)({},e),{},{score:0,phase:"questions",playerName:n});case I:return Object(m.a)(Object(m.a)({},e),{},{phase:t.phase});case k:var r={correct:t.correct,myAnswer:t.answer},s=Object(m.a)(Object(m.a)({},e.answerSheet),{},Object(Q.a)({},t.QNum+1,r));return Object(m.a)(Object(m.a)({},e),{},{answerSheet:s,score:e.score+t.score});case T:return{score:0,playerName:t.name,phase:t.phase,answerSheet:{}};default:return e}}}),_=Object(X.composeWithDevTools)(Object(H.applyMiddleware)(F.a,Object(V.createLogger)({collapsed:!0}))),K=Object(H.createStore)(z,_),$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};i.a.render(Object(r.jsx)(p.a,{store:K,children:Object(r.jsx)(Y,{})}),document.getElementById("root")),$()}},[[40,1,2]]]);
//# sourceMappingURL=main.3be9d82c.chunk.js.map