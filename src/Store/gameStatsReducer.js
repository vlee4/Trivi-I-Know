//Game statistics

//Actions
const ACTIVATE_GAME = "ACTIVATE_GAME";
const CHANGE_PHASE = "CHANGE_PHASE";

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

/*
State = {
  score: 0,
  playerName: "",
  gamePhase: start|questions|results,
}
*/


export default function gameStatsReducer(state = {score:0, playerName:"", phase: "start"}, action){
  switch(action.type){
    case ACTIVATE_GAME:
      let newName = action.name ? action.name : state.name;
      return {score:0, phase: "questions", name: newName}
    case CHANGE_PHASE:
      return {...state, phase: action.phase};
    default:
      return state;
  }
}
