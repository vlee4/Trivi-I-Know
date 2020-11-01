import QandA from "../Apprentice_TandemFor400_Data.json"
//Initial State
const initialState = {
  QNum: 0,
  CurQ: {},
  Questions: [],
}

//Action
const GET_QUESTIONS = "GET_QUESTIONS";
const GENERATE_QUESTION = "GENERATE_QUESTION";

//ACTION CREATOR
const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

const generateQuestion = (question) => {
  return {
    type: GENERATE_QUESTION,
    question
  }
}

export const pickQuestions = () => {
  return (dispatch) => {
    let chosen = new Set();
    let counter = 0;
    while(counter<10){
      let index = Math.floor(Math.random()*(QandA.length));
      if(!chosen.has(index)){
        chosen.add(index);
        counter++;
      }
    }
    console.log("CHOSEN",[...chosen]);
    dispatch(getQuestions([...chosen]));
  }
}
//Input will be INDEX in QandA to look for
export const formatQuestion = (qNum) => {
  return (dispatch) => {
    let {question, correct, incorrect} = QandA[qNum];
    let inserts = new Set();
    let answers = [correct, ...incorrect];

    //Randomize order of possible answers
    while(inserts.size<4){ //creates order of indexes
      let idx = Math.floor(Math.random()*(3))
      inserts.add(idx);
    }
    let ansArr = [];
    inserts.forEach(idx=> {
      ansArr.push(answers[idx])
    })

   console.log("ANSWERS", ansArr)
    dispatch(generateQuestion({question, answers: ansArr}))
  }
}
/*{
  queston: q,
  answers: [in randomized order]

}*/


//Reducer
export default function questionsReducer(state=initialState, action){
  switch(action.type){
    case GET_QUESTIONS:
      return {...state, Questions: action.questions}
    case GENERATE_QUESTION:
      return {...state, CurQ: action.question}
    default:
      return state;
  }
}
