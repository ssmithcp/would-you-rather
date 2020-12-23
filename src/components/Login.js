import React from 'react'

import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

class Login extends React.Component {
  doLogin(userId) {
    this.props.dispatch(setAuthedUser(userId))
  }

  render() {
    return (
      <div className='container my-1'>
        <h2>Choose login user</h2>
        <select name='user' className='my-1' onChange= { e => this.doLogin(e.target.value) }>
          <option value=''></option>
          {Object.values(this.props.users).map(user => (
            <option
              key={ user.id }
              value={ user.id }
            >
              { user.name }
            </option>
          ))}
        </select>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)