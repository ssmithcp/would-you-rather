import { LOADING_FINISHED } from '../actions/loading'

export default function loading(state = true, action) {
  switch (action.type) {
    case LOADING_FINISHED:
      return action.loading
    default:
      return state
  }
}