import QandA from "../Apprentice_TandemFor400_Data.json"
//Initial State
const initialState = {
  QNum: 0,
  QIdx: 0,
  CurQ: {},
  Questions: [],
}

//Action
const GET_QUESTIONS = "GET_QUESTIONS";
const GENERATE_QUESTION = "GENERATE_QUESTION";
const NEXT_QUESTION = "NEXT_QUESTION";
const RESET_QUESTIONS = "RESET_QUESTIONS";


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

const getNext = (qNum) => {
  return {
    type: NEXT_QUESTION,
    qNum
  }
}

const reset = () => {
  return {
    type: RESET_QUESTIONS,
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
    dispatch(getQuestions([...chosen]));
  }
}
//Input will be INDEX in QandA to look for
export const formatQuestion = (qIdx) => {
  return (dispatch) => {
    try{
      let {question, correct, incorrect} = QandA[qIdx];
      let inserts = new Set();
      let answers = [correct, ...incorrect];

      //Randomize order of possible answers
      while(inserts.size<answers.length){ //creates order of indexes
        let idx = Math.floor(Math.random()*(answers.length))
        inserts.add(idx);
      }
      let ansArr = [];
      inserts.forEach(idx=> {
        ansArr.push(answers[idx])
      })
      dispatch(generateQuestion({question, answers: ansArr}))
    } catch(error){
        console.log("Error formatting questions", error);
    }
  }
}

export const nextQuestion = (qNum) => {
  return (dispatch) => {
    dispatch(getNext(qNum))
  }
}

export const resetQuestions = () => {
  return (dispatch) => {
    dispatch(reset())
  }
}


//Reducer
export default function questionsReducer(state=initialState, action){
  switch(action.type){
    case GET_QUESTIONS:
      return {...state, Questions: action.questions, QIdx: action.questions[0]}
    case GENERATE_QUESTION:
      return {...state, CurQ: action.question}
    case NEXT_QUESTION:
      let nextIndex = state.Questions[action.qNum+1];
      return {...state, QNum: action.qNum+1, QIdx:nextIndex}
    case RESET_QUESTIONS:
      return {QNum: 0, QIdx: 0, CurQ: {}, Questions: []}
    default:
      return state;
  }
}
