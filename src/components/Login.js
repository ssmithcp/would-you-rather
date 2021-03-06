import React from 'react'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

function Login({ dispatch, users }) {
  const doLogin = (userId) => {
    dispatch(setAuthedUser(userId))
  }

  return (
    <>
      <h2>Choose login user</h2>
      <select
        name='user'
        className='my-2'
        onChange= { e => doLogin(e.target.value)}
      >
        <option value=''></option>
        {Object.values(users).map(user => (
          <option
            key={ user.id }
            value={ user.id }
          >
            { user.name }
          </option>
        ))}
      </select>
    </>
  )
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)