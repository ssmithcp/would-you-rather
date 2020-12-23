import React from 'react'
import { connect } from 'react-redux'

import { clearAuthedUser } from '../actions/authedUser'

import './Nav.scss'

class Nav extends React.Component {
  logout() {
    this.props.dispatch(clearAuthedUser())
  }

  render() {
    const user = this.props.authedUser && this.props.users[this.props.authedUser];

    return (
      <div className='nav-bar-separator'>
        <div className='container nav-bar'>
          <ul className='links'>
            <li>Home</li>
            <li>New Question</li>
            <li>Leader Board</li>
          </ul>

          <div className='profile'>
            { user && (
              <React.Fragment>
                <p>Hello, { user.name }</p>
                <img src={ user.avatarURL } alt='avatar' />
                <button onClick={ () => this.logout() }>Logout</button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Nav);
