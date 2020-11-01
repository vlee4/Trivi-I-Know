import React from "react";
import {connect} from "react-redux";
import {formatQuestion, nextQuestion} from "../Store/questionsReducer";
import {checkAnswer, nextPhase} from "../Store/gameStatsReducer";

class Question extends React.Component{
  constructor(){
    super()
      this.state={
        choice: "",
        submitted: false,
      }

      this.onChange = this.onChange.bind(this);
      this.submitAnswer = this.submitAnswer.bind(this);
      this.nextQ = this.nextQ.bind(this);
  }

 async componentDidMount(){
   try{
     await this.props.getQ(this.props.QIdx)
   } catch(error){
     console.log("Error getting question", error)
   }
  }

  onChange(e){
    this.setState({choice: e.target.value})
  }

  submitAnswer(e){
    e.preventDefault();
    this.props.check(this.props.QNum, this.props.QIdx,this.state.choice)
    this.setState({submitted: true})
    console.log("Submission value", this.state.choice);
  }

  async nextQ(){
    if(this.props.QNum+1===10){
      this.props.endRound("results");
    }else{
      try{
        await this.props.nextQuest(this.props.QNum);
        await this.props.getQ(this.props.QIdx);
        this.setState({choice: "", submitted: false})
      } catch(error){
        console.log("Error getting to next question", error)
      }
    }
  }

  render(){
    console.log("PROPS",this.props)
    if(!this.props.curQuestion){
      return(
        <div className="question">
        <h2 className="loading">Loading...</h2>
      </div>
      )
    }
    let {question, answers} = this.props.curQuestion;
    let {correct, myAnswer} = (this.props.gameStats.answerSheet[this.props.QNum+1])? this.props.gameStats.answerSheet[this.props.QNum+1]: {};
  return(
    <div className="question">
      <div className="topBanner">
        <div>Question {this.props.QNum+1}/10</div>
        <div>{this.props.gameStats.name||""}</div>
        <div className="navQuestions">
          <button>Previous</button>
          <button onClick={this.nextQ} disabled={!this.state.submitted}>Next</button>
        </div>
      </div>

      <form className="playerInput" onSubmit={this.submitAnswer}>
        <h3 className="questionHeader">{question||"Question"}</h3>
        <div className="mappedAnswers">
          {this.props.curQuestion.answers?(
            answers.map((ans, idx)=> {
            return(
                <div className="answer" key={`ans_${idx}`}>
                  <input name="answer" type="radio" id={ans} value={ans} onChange={this.onChange} checked={this.state.choice===ans}/>
                  <label htmlFor={ans}>{ans}</label>
                </div>
            )
          }))
          :(<div className="answer">Loading</div>)}
          </div>
          <button type="submit" disabled={!this.state.choice.length||(this.state.submitted)}>Submit</button>
      </form>
      <div className="answerCompare">
        {(correct?(
          <div>
          {correct===myAnswer? `Congrats, ${correct} is correct!`: `Sorry, ${myAnswer} is wrong! The correct answer is ${correct}.`}
          </div>):
          "")}
      </div>

    </div>
  )
  }
}

const mapStateToState = (state) => {
  return {
    curQuestion: state.questions.CurQ,
    QNum: state.questions.QNum,
    QIdx: state.questions.QIdx,
    gameStats: state.gameStats

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQ: (num) => dispatch(formatQuestion(num)),
    check: (QNum, QIdx, answer) => dispatch(checkAnswer(QNum, QIdx, answer)),
    nextQuest: (qNum) => dispatch(nextQuestion(qNum)),
    endRound: (phase) => dispatch(nextPhase(phase))
  }
}

export default connect(mapStateToState, mapDispatchToProps)(Question);
