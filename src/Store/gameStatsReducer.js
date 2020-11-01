//Game statistics
import QandA from "../Apprentice_TandemFor400_Data.json"
//Actions
const ACTIVATE_GAME = "ACTIVATE_GAME";
const CHANGE_PHASE = "CHANGE_PHASE";
const CHECK_ANSWER = "CHECK_ANSWER";

//Action Creator
const startGame = (name) => {
  return {
    type: ACTIVATE_GAME,
    name
  }
}

const changePhase = (phase) => {
  return {
    type: CHANGE_PHASE,
    phase
  }
}

const checkSubmission = (QNum, correct, answer, score) => {
  return {
    type: CHECK_ANSWER,
    QNum,
    correct,
    answer,
    score,
  }
}



//Thunk Creator
export const activateGame = (name) => {
  return (dispatch) => {
    dispatch(startGame(name))
  }
}

export const nextPhase = (phase) => {
  return (dispatch) => {
    dispatch(changePhase(phase))
  }
}

export const checkAnswer = (QNum, QIdx, answer) => {
  return (dispatch) => {
    let {correct} = QandA[QIdx];
    let score = 0;
    if(correct===answer){
      score++;
    }
    dispatch(checkSubmission(QNum, correct, answer, score ))
  }
}

/*
State = {
  score: 0,
  playerName: "",
  gamePhase: start|questions|results,
  answerSheet: {
    QNum: {answer:, correct: }
  }
}
*/


export default function gameStatsReducer(state = {score:0, playerName:"", phase: "start", answerSheet:{}}, action){
  switch(action.type){
    case ACTIVATE_GAME:
      let newName = action.name ? action.name : state.name;
      return {...state, score:0, phase: "questions", playerName: newName}
    case CHANGE_PHASE:
      return {...state, phase: action.phase};
    case CHECK_ANSWER:
      let newSubmission = {correct: action.correct, myAnwer: action.answer}
      let update = {...state.answerSheet, [action.QNum+1]: newSubmission}
      return {...state, answerSheet: update, score: state.score+action.score}
    default:
      return state;
  }
}
