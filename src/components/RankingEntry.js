import React from 'react'

import './RankingEntry.scss'

function RankingEntry({ user }) {
  const answerCount = Object.keys(user.answers).length
  const questionsCount = user.questions.length

  return (
    <div className='leaderboard-card'>
      <div className='user-card'>
        <img className='avatar' src={ user.avatarURL } alt='avatar' />
        <p>{ user.name }</p>
      </div>
      <ul>
        <li>Score <strong>{ answerCount + questionsCount }</strong></li>
        <li>Answered <strong>{ answerCount }</strong> questions</li>
        <li>Asked <strong>{ questionsCount }</strong> questions</li>
      </ul>
    </div>
  )
}

export default RankingEntry