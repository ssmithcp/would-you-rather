export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  }
}

export function clearAuthedUser() {
  return setAuthedUser(null)
}