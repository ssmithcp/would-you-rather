import React from 'react'
import { NavLink } from 'react-router-dom'
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
            <li>
              <NavLink to='/' exact activeClassName='current'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' activeClassName='current'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' activeClassName='current'>
                Leader Board
              </NavLink>
            </li>
          </ul>

          <div className='profile'>
            { user && (
              <>
                <p>Hello, { user.name }</p>
                <img className='avatar' src={ user.avatarURL } alt='avatar' />
                <button onClick={ () => this.logout() }>Logout</button>
              </>
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
