import React from 'react'
import { connect } from 'react-redux'

import { FaCheck } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import './QuestionOverview.scss'

function QuestionOverview({ id, authedUser, questions, users }) {
  const question = questions[id]
  const askedBy = users[question.author]

  const chosenOption = question.optionOne.votes.includes(authedUser.id)
    ? question.optionOne
    : question.optionTwo.votes.includes(authedUser.id)
        ? question.optionTwo
        : null

  const maybeAddCheck = (currentOption) =>
    currentOption === chosenOption
      ? <FaCheck className='answered'/>
      : null

  return (
    <div className='question-card'>
      <h3>Would you rather...</h3>
      <p>
        { maybeAddCheck(question.optionOne) }
        { question.optionOne.text }
      </p>
      <p>OR</p>
      <p>
        { maybeAddCheck(question.optionTwo) }
        { question.optionTwo.text }
      </p>
      <Button
        variant='primary'
        href={'/questions/' + id}>
          {chosenOption === null
            ? 'Vote!'
            : 'View results'}
      </Button>
      <p className='asked-by'>Asked by: { askedBy.name }</p>
    </div>
  )
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users,
  }
}

export default connect(mapStateToProps)(QuestionOverview);