import React from "react";
import {connect} from "react-redux";
import {formatQuestion} from "../Store/questionsReducer";

class Question extends React.Component{
  componentDidMount(){
    console.log("PROPS", this.props)
    // let qNum = (this.props&&this.props.)
    // this.props.getQ()
  }
  render(){
  return(
    <div className="question">
      <div className="topBanner">
  <div>Question {this.props.QNum+1}/10</div>
      <div className="navQuestions">
        <button>Previous</button>
        <button>Next</button>
        </div></div>

      <form className="playerInput">
        <h3 className="questionHeader">Here's your question?</h3>
        <div className="answer">

          <input name="answer" type="radio" placeholder="Create map function to display question's 4 answers"/>
          <label htmlFor="A1">Answer 1</label>
        </div>
        <div className="answer">
          <input name="answer" type="radio" placeholder="Create map function to display question's 4 answers"/>
          <label htmlFor="A1">Answer 2</label>
        </div>
        <div className="answer">
          <input name="answer" type="radio" placeholder="Create map function to display question's 4 answers"/>
          <label htmlFor="A1">Answer 3</label>
        </div>
        <div className="answer">
          <input name="answer" type="radio" placeholder="Create map function to display question's 4 answers"/>
          <label htmlFor="A1">Answer 4</label>
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

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQ: (qNum) => dispatch(formatQuestion(qNum))
  }
}

export default connect(mapStateToState, mapDispatchToProps)(Question);
