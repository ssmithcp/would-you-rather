import { RECEIVE_QUESTIONS, ANSWER_QUESTION, NEW_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
  case RECEIVE_QUESTIONS:
    return {
      ...state,
      ...action.questions,
    }
  case ANSWER_QUESTION:
    const originalQuestion = state[action.qid]
    const selection = originalQuestion[action.selection]

    const updatedQuestion = {
      ...originalQuestion,
      [action.selection]: {
        ...selection,
        votes: selection.votes.concat([action.uid])
      },
    }

    return {
      ...state,
      [action.qid]: updatedQuestion,
    }
  case NEW_QUESTION:
    return {
      ...state,
      [action.qid]: {
        author: action.uid,
        id: action.qid,
        optionOne: {
          votes: [],
          text: action.optionOne,
        },
        optionTwo: {
          votes: [],
          text: action.optionTwo
        },
        timestamp: Date.now()
      }
    }
  default:
    return state
  }
}