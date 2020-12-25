import React from 'react'
import { connect } from 'react-redux'

import RankingEntry from './RankingEntry'

function LeaderBoard({ users }) {
  return (
    <>
      <h2>Leader Board</h2>
      { users.map(user =>
        <RankingEntry key={ user.id } user={ user }
      />) }
    </>
  )
}

function mapStateToProps({ users }) {
  const count = (user) => Object.keys(user.answers).length + user.questions.length

  return {
    users: Object.values(users).sort((a, b) => count(b) - count(a))
  }
}

export default connect(mapStateToProps)(LeaderBoard)