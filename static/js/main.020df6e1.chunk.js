(this["webpackJsonptrivi-i-know"]=this["webpackJsonptrivi-i-know"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"question":"What was Tandem previous name?","incorrect":["Tandem","Burger Shack","Extraordinary Humans"],"correct":"Devmynd"},{"question":"In Shakespeare\'s play Julius Caesar, Caesar\'s last words were...","incorrect":["Iacta alea est!","Vidi, vini, vici","Aegri somnia vana"],"correct":"Et tu, Brute?"},{"question":"A group of tigers are referred to as:","incorrect":["Chowder","Pride","Destruction"],"correct":"Ambush"},{"question":"What is the top speed an average cat can travel?","incorrect":["42 mph","13 mph","9 mph"],"correct":"31 mph"},{"question":"A cat can jump to _____ times its own height:","incorrect":["3","9","7"],"correct":"5"},{"question":"What is the only letter that doesn\'t appear in a US state name?","incorrect":["M","Z","X"],"correct":"Q"},{"question":"What is the name for a cow-bison hybrid?","incorrect":["Cowson","Bicow","Mooson"],"correct":"Beefalo"},{"question":"What is the largest freshwater lake in the world?","incorrect":["Lake Baikal","Lake Michigan","Lake Victoria"],"correct":"Lake Superior"},{"question":"In a website address bar, what does WWW stand for?","incorrect":["Wild Wild West","War World Web"],"correct":"World Wide Web"},{"question":"In a game of bingo, what number is represented by the name two little ducks?","incorrect":["20","55","77"],"correct":"22"},{"question":"According to Greek mythology, who was the first woman on Earth?","incorrect":["Lilith","Eve","Hera"],"correct":"Pandora"},{"question":"In which European city would you find Orly airport?","incorrect":["London","Belgium","Munich"],"correct":"Paris"},{"question":"Where would you find the Sea of Tranquility?","incorrect":["California","Siberia","China"],"correct":"The Moon"},{"question":"Which artist painted \'Girl with a Pearl Earrin\'?","incorrect":["Van Gogh","Picasso","Da Vinci"],"correct":"Vermeer"},{"question":"What is the official name for the \'hashtag\' symbol?","incorrect":["Number sign","Hash Sign","Pound"],"correct":"Octothorpe"},{"question":"Not American at all, where is apple pie from?","incorrect":["Japan","Ethiopia","Canada"],"correct":"England"},{"question":"What is the national animal of Scotland?","incorrect":["Bear","Rabbit","Seal"],"correct":"Unicorn"},{"question":"Where in the world is the only place where Canada is *due south*","incorrect":["Alaska","Russia","Washington"],"correct":"Detroit"},{"question":"Approximately how many grapes go into a bottle of wine?","incorrect":["500","200","1000"],"correct":"700"},{"question":"How much does a US One Dollar Bill cost to make?","incorrect":["$0.25","$1","$5"],"correct":"$0.05"},{"question":"The Vatican bank has the only ATM in the world that allows users to do what?","incorrect":["Receive withdrawls in rosary beads","Vote for the Pope","Purchase indulgences"],"correct":"Perform transactions in Latin"}]')},29:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),s=n.n(a),i=n(10),o=n.n(i),c=(n(29),n(5)),u=n(6),l=n(8),h=n(7),d=(n(30),n(9)),p=n(2),b=n(3),m=n(16),j=n(14),f={QNum:0,QIdx:0,CurQ:{},Questions:[]},O="GET_QUESTIONS",g="GENERATE_QUESTION",v=function(e){return{type:g,question:e}},w=function(){return function(e){for(var t,n=new Set,r=0;r<10;){var a=Math.floor(Math.random()*j.length);n.has(a)||(n.add(a),r++)}e((t=Object(m.a)(n),{type:O,questions:t}))}};var x="ACTIVATE_GAME",y="CHANGE_PHASE",q=function(e){return function(t){t(function(e){return{type:x,name:e}}(e))}};var S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={nameInput:"",disabled:!0},e.inputVal=s.a.createRef(),e.toggleButton=e.toggleButton.bind(Object(d.a)(e)),e.startGame=e.startGame.bind(Object(d.a)(e)),e}return Object(u.a)(n,[{key:"toggleButton",value:function(){var e=!this.inputVal.current.value.trim().length;this.setState({nameInput:this.inputVal,disabled:e})}},{key:"startGame",value:function(){try{this.props.fetchQuestions(),this.props.beginGame(this.inputVal.current.value)}catch(e){console.log("Error starting game:",e)}}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"start",children:[Object(r.jsx)("div",{children:"Welcome to Trivi-I-Know"}),Object(r.jsx)("div",{children:"Score board would go here"}),Object(r.jsxs)("div",{className:"playerInput",children:[Object(r.jsx)("label",{htmlFor:"name",children:"Player Name: "}),Object(r.jsx)("input",{name:"name",type:"text",placeholder:"Please enter your name",ref:this.inputVal,onChange:this.toggleButton}),Object(r.jsx)("button",{type:"button",disabled:this.state.disabled,onClick:this.startGame,children:"Start Game"})]})]})}}]),n}(s.a.Component),N=Object(p.b)(null,(function(e){return{fetchQuestions:function(){return e(w())},beginGame:function(t){return e(q(t))}}}))(S),Q=n(15),k=n.n(Q),W=n(20),C=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(W.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.props.getQ(this.props.QIdx);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Error getting question",e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(console.log("PROPS",this.props),!this.props.curQuestion)return Object(r.jsx)("div",{className:"question",children:Object(r.jsx)("h2",{className:"loading",children:"Loading..."})});var e=this.props.curQuestion,t=e.question,n=e.answers;return Object(r.jsxs)("div",{className:"question",children:[Object(r.jsxs)("div",{className:"topBanner",children:[Object(r.jsxs)("div",{children:["Question ",this.props.QNum+1,"/10"]}),Object(r.jsx)("div",{children:this.props.gameStats.name||""}),Object(r.jsxs)("div",{className:"navQuestions",children:[Object(r.jsx)("button",{children:"Previous"}),Object(r.jsx)("button",{children:"Next"})]})]}),Object(r.jsxs)("form",{className:"playerInput",children:[Object(r.jsx)("h3",{className:"questionHeader",children:t||"Question"}),Object(r.jsx)("div",{className:"mappedAnswers",children:this.props.curQuestion.answers?n.map((function(e,t){return Object(r.jsxs)("div",{className:"answer",children:[Object(r.jsx)("input",{name:"answer",type:"radio",placeholder:"Create map function to display question's 4 answers"}),Object(r.jsx)("label",{htmlFor:"A1",children:e})]},"ans_".concat(t))})):Object(r.jsx)("div",{className:"answer",children:"Loading"})}),Object(r.jsx)("button",{type:"submit",children:"Submit"})]})]})}}]),n}(s.a.Component),E=Object(p.b)((function(e){return{curQuestion:e.questions.CurQ,QNum:e.questions.QNum,QIdx:e.questions.QIdx,gameStats:e.gameStats}}),(function(e){return{getQ:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){try{for(var n=j[e],r=n.question,a=n.correct,s=n.incorrect,i=new Set,o=[a].concat(Object(m.a)(s));i.size<4;){var c=Math.floor(4*Math.random());i.add(c)}var u=[];i.forEach((function(e){u.push(o[e])})),t(v({question:r,answers:u}))}catch(l){console.log("Error formatting questions",l)}}}(t))}}}))(C);var I=function(){return Object(r.jsxs)("div",{className:"results",children:[Object(r.jsx)("h2",{children:"Congratulations [player name]!"}),Object(r.jsx)("h3",{children:"Your score is: x/10"}),Object(r.jsxs)("div",{className:"resultBtns",children:[Object(r.jsx)("button",{children:"Return to Start"}),Object(r.jsx)("button",{children:"Restart game"})]})]})},A=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=(this.props?this.props.gameStats:null).phase;return this.props.gameStats.phase?Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{id:"gameName",children:"Trivi-I-Know"}),"start"===e?Object(r.jsx)(N,{}):"questions"===e?Object(r.jsx)(E,{}):Object(r.jsx)(I,{})]}):Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("h2",{className:"loading",children:"Loading..."})})}}]),n}(s.a.Component),P=Object(p.b)((function(e){return{questions:e.questions,gameStats:e.gameStats}}))(A),T=n(4),B=n(21),G=n(22),L=n(23),M=Object(T.combineReducers)({questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),{},{Questions:t.questions,QIdx:t.questions[0]});case g:return Object(b.a)(Object(b.a)({},e),{},{CurQ:t.question});default:return e}},gameStats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{score:0,playerName:"",phase:"start"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n=t.name?t.name:e.name;return{score:0,phase:"questions",name:n};case y:return Object(b.a)(Object(b.a)({},e),{},{phase:t.phase});default:return e}}}),V=Object(L.composeWithDevTools)(Object(T.applyMiddleware)(G.a,Object(B.createLogger)({collapsed:!0}))),_=Object(T.createStore)(M,V),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))};o.a.render(Object(r.jsx)(p.a,{store:_,children:Object(r.jsx)(P,{})}),document.getElementById("root")),R()}},[[39,1,2]]]);
//# sourceMappingURL=main.020df6e1.chunk.js.map