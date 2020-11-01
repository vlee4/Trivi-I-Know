import React from "react";
import {connect} from "react-redux";

function Results(props) {
  return(
    <div className="results">
      <h2>Congratulations {props.gameStats.playerName}!</h2>
      <h3>{`You're score is ${props.gameStats.score}/10`}</h3>

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
