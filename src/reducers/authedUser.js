import { SET_AUTHED_USER } from '../actions/authedUser'
import { ANSWER_QUESTION } from '../actions/questions'

export default function authedUser(state = null, action) {
  switch (action.type) {
  case SET_AUTHED_USER:
    return action.user
  case ANSWER_QUESTION:
    return {
      ...state,
      answers: {
        ...state.answers,
        [action.qid]: action.selection,
      }
    }
  default:
    return state;
  }
}