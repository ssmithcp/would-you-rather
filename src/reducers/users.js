import { RECEIVE_USERS } from '../actions/users'
import { ANSWER_QUESTION } from '../actions/questions'

export default function users(state = {}, action) {
  switch (action.type) {
  case RECEIVE_USERS:
    return {
      ...state,
      ...action.users,
    }
  case ANSWER_QUESTION:
    return {
      ...state,
      [action.uid]: {
        ...state[action.uid],
        answers: {
          ...state[action.uid].answers,
          [action.qid]: action.selection,
        }
      },
    }
  default:
    return state
  }
}