// import { showLoading, hideLoading } from 'react-redux-loading'

import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'

export function handleInitialData() {
  return (dispatch) => {
    // dispatch(showLoading())

    getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))

        // dispatch(hideLoading())
      })
  }
}