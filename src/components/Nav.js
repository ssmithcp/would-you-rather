import React from 'react'

import './Nav.scss'

function Nav(props) {
  const { authedUser } = props;

  return (
    <div className='nav-bar'>
      <ul className='container'>
        <li>Home</li>
        <li>New Question</li>
        <li>Leader Board</li>

        { authedUser && (
        <React.Fragment>
        <li>Hello, { authedUser.name }</li>
        <li><img src={ authedUser.avatarURL } alt='avatar' /></li>
        <li>Logout</li>
        </React.Fragment>
        )}
      </ul>
    </div>
  )
}

export default Nav;
