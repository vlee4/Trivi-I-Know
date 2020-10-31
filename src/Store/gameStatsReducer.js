//Game statistics
/*
State = {
  score: 0,
  playerName: "",
  gamePhase: start|questions|results,
}
*/


export default function gameStatsReducer(state = {score:0, playerName:"", gamePhase: "start"}, action){
  switch(action.type){
    default:
      return state;
  }
}
