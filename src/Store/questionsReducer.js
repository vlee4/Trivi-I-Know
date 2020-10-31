import QandA from "../Apprentice_TandemFor400_Data.json"

//Action
const GET_QUESTIONS = "GET_QUESTIONS";

//ACTION CREATOR
const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export const pickQuestion = () => {
  return (dispatch) => {
    let chosen = [];
    let counter = 0;
    while(counter<10){
      let index = Math.floor(Math.random()*(QandA.length))
      chosen.push(QandA[index]);
      counter++;
    }
    console.log("CHOSEN",chosen);
    dispatch(getQuestions(chosen));
  }
}

/*State = {
  QNum: 0,
  Questions: [],
}
*/
//Reducer
export default function questionsReducer(state={QNum: 0, Questions: []}, action){
  switch(action.type){
    case GET_QUESTIONS:
      return {...state, Questions: action.questions}
    default:
      return state;
  }
}
