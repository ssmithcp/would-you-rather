import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions'

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
  default:
    return state
  }
}