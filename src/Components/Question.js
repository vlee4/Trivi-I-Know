import React from "react";
import {connect} from "react-redux";
import {formatQuestion} from "../Store/questionsReducer";

class Question extends React.Component{
 async componentDidMount(){
   try{
    //  console.log("PROPS", this.props)
     // let qNum = (this.props&&this.props.)
     await this.props.getQ(this.props.QIdx)
     console.log("PROPS", this.props)
   } catch(error){
     console.log("Error getting question", error)
   }
  }
  render(){
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

      <form className="playerInput">
        <h3 className="questionHeader">{question||"Question"}</h3>
        <div className="mappedAnswers">
          {answers.map((ans, idx)=> {
            return(
                <div className="answer" key={`ans_${idx}`}>
                  <input name="answer" type="radio" placeholder="Create map function to display question's 4 answers"/>
                  <label htmlFor="A1">{ans}</label>
                </div>
            )
          })}
          </div>
          <button type="submit">Submit</button>
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
