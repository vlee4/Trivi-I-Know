import React from "react";
import {connect} from "react-redux";
import {resetQuestions, pickQuestions} from "../Store/questionsReducer";
import {resetStats} from "../Store/gameStatsReducer";

function Results(props) {

  function nextRound(){
    //Will start a new round with the same player name
    console.log("Let's play another round")
    props.resetGameStats(props.gameStats.playerName, "questions")
    props.resetGameQuests()
    props.fetchQuestions()
  }

  function newGame(){
    //Will return game to start screen and ask for new player name
    console.log("Let's start a new game, switch players!")
    props.resetGameStats();
    props.resetGameQuests();
  }

  return(
    <div className="results">
      <h2>Congratulations {props.gameStats.playerName}!</h2>
      <h3>{`You're score is ${props.gameStats.score}/10`}</h3>
      <div className="answerSheet">
      <h3>Your Answers</h3>
      <table>
        <thead>
        <tr className="row row_head">
               <th className="row_left" colSpan="1">My Answers</th>
               <th className="row_right" colSpan="1">Correct Answers</th>
              </tr>
        </thead>
        <tbody>
        {props.gameStats.answerSheet? (Object.values(props.gameStats.answerSheet).map((item, idx)=> {
          let style = (item.myAnswer===item.correct)? "correct_row":"incorrect_row";
          return (
              <tr key={`Ans_Entry_${idx}`} className={`${style}`} >
                <td className="row_left">{item.myAnswer}</td>
                <td className="row_right">{item.correct}</td>
              </tr>
          )
        })):""}
        </tbody>
      </table>
    </div>
      <div className="resultBtns">
        <button onClick={newGame}>Return to Start</button>
        <button onClick={nextRound}>Restart game</button>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    gameStats: state.gameStats,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetGameStats: (name, phase) => dispatch(resetStats(name, phase)),
    resetGameQuests: () => dispatch(resetQuestions()),
    fetchQuestions: () => dispatch(pickQuestions()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
