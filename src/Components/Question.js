import React from "react";
import {connect} from "react-redux";
import {formatQuestion} from "../Store/questionsReducer";

class Question extends React.Component{
  constructor(){
    super()
      this.state={
        choice: "",
        submitted: false,
      }

    this.submitAnswer = this.submitAnswer.bind(this);
    this.onChange = this.onChange.bind(this);
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
    this.setState({submitted: true})
    console.log("Submission value", this.state.choice);
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
  return(
    <div className="question">
      <div className="topBanner">
        <div>Question {this.props.QNum+1}/10</div>
        <div>{this.props.gameStats.name||""}</div>
        <div className="navQuestions">
          <button>Previous</button>
          <button>Next</button>
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
    getQ: (num) => dispatch(formatQuestion(num))
  }
}

export default connect(mapStateToState, mapDispatchToProps)(Question);
