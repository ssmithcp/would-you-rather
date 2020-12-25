import React from 'react'
import { connect } from 'react-redux'

import './AskedBy.scss'

function AskedBy({ user }) {
  return (
    <>
      <p className='asked-by'>
        Asked by:&nbsp;
        { user.name }
        <img className='avatar' src={ user.avatarURL } alt='avatar' />
      </p>
    </>
  )
}

function mapStateToProps({ users }, { userId }) {
  return {
    user: users[userId],
  }
}

export default connect(mapStateToProps)(AskedBy)