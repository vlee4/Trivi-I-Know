import React from "react";
import {connect} from "react-redux";

function Results(props) {
  return(
    <div className="results">
      <h2>Congratulations {props.gameStats.playerName}!</h2>
      <h3>{`You're score is ${props.gameStats.score}/10`}</h3>
      {/* <div className="answerSheet">
        <h4>Your answers</h4>
        <div className="row">
                <strong className="row_left">My Answers</strong>
                <strong className="row_right">Correct Answers</strong>
              </div>
        {props.gameStats.answerSheet? (Object.values(props.gameStats.answerSheet).map((item, idx)=> {
          return (
              <div key={`Ans_Entry_${idx}`} className="row">
                <div className="row_left">{item.myAnswer}</div>
                <div className="row_right">{item.correct}</div>
              </div>
          )
        })):""}
      </div> */}
      <div className="answerSheet">
      <h3>Your Answers</h3>
      <table>
        <thead>
        <tr className="row">
               <th className="row_left" colSpan="1">My Answers</th>
               <th className="row_right" colSpan="1">Correct Answers</th>
              </tr>
        </thead>
        <tbody>
        {props.gameStats.answerSheet? (Object.values(props.gameStats.answerSheet).map((item, idx)=> {
          let style = (item.myAnswer===item.correct)? "correct_row":"incorrect_row";
          return (
              <tr key={`Ans_Entry_${idx}`} className={`row ${style}`} >
                <td className="row_left">{item.myAnswer}</td>
                <td className="row_right">{item.correct}</td>
              </tr>
          )
        })):""}
        </tbody>
      </table>
    </div>
      <div className="resultBtns">
        <button>Return to Start</button>
        <button>Restart game</button>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    gameStats: state.gameStats,
  }
}

export default connect(mapStateToProps)(Results);
