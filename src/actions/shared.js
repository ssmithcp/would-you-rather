import { showLoading, hideLoading } from 'react-redux-loading'

import { getInitialData } from '../utils/api'

import { loadingFinished } from './loading'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())

    getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))

        dispatch(hideLoading())
        dispatch(loadingFinished())
      })
  }
}