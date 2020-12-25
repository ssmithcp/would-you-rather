import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { clearAuthedUser } from '../actions/authedUser'

import Button from 'react-bootstrap/Button';
import './Nav.scss'

function Nav({ authedUser, dispatch }) {
  const history = useHistory();

  const logout = () => {
    dispatch(clearAuthedUser())
      .then(() => history.push('/'))
  }

  return (
    <div className='nav-bar-separator'>
      <div className='container nav-bar'>
        <nav>
          <ul className='links'>
            <li>
              <NavLink to='/' exact activeClassName='current'>
                <div>Home</div>
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' activeClassName='current'>
              <div>New Question</div>
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' activeClassName='current'>
              <div>Leader Board</div>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className='profile'>
          { authedUser && (
            <>
              <p>Hello, { authedUser.name }</p>
              <img className='avatar' src={ authedUser.avatarURL } alt='avatar' />
              <Button variant="outline-dark" onClick={ logout }>Logout</Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function mapStateToProps({ authedUserId, users }) {
  return {
    authedUser: users[authedUserId] || null,
    users,
  }
}

export default connect(mapStateToProps)(Nav);
