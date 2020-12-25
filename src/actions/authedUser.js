export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(user) {
  return dispatch => {
    dispatch({
      type: SET_AUTHED_USER,
      user,
    })
    return Promise.resolve()
  }
}

export function clearAuthedUser() {
  return dispatch => {
    dispatch({
      type: SET_AUTHED_USER,
      user: null,
    })
    return Promise.resolve()
  }
}