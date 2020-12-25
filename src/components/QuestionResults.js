import React from 'react'
import { connect } from 'react-redux'

import { getChosenOption } from '../utils/helpers'

import { FaCheck } from 'react-icons/fa'
import './QuestionOverview.scss'

function QuestionResults({ id, authedUser, questions, users }) {
  const question = questions[id]
  const askedBy = users[question.author]
  const chosenOption = getChosenOption(authedUser, question)
  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

  return (
    <div className='question-card'>
      <h3>Poll / Results:</h3>
      <h4>Would you rather...</h4>
      { summaryLine(question.optionOne, question.optionOne === chosenOption, question.optionOne.votes.length, totalVotes) }
      <p>OR</p>
      { summaryLine(question.optionTwo, question.optionTwo === chosenOption, question.optionTwo.votes.length, totalVotes) }
      <p className='asked-by'>Asked by: { askedBy.name }</p>
    </div>
  )
}

function summaryLine(option, addCheck, count, total) {
  return (
    <>
      <p>{ option.text }</p>
      { addCheck && (
        <p>
          <FaCheck className='answered'/>
          You chose this option!
        </p>
      )}
      <p>Chosen by { count } of { total }: <strong>{ ((count / total) * 100).toFixed(0) }%</strong></p>
    </>
  )
}

function mapStateToProps({ authedUserId, questions, users }) {
  return {
    authedUser: users[authedUserId] || null,
    questions,
    users,
  }
}

export default connect(mapStateToProps)(QuestionResults);