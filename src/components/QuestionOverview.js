import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getChosenOption } from '../utils/helpers'

import { FaCheck } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import './QuestionOverview.scss'

function QuestionOverview({ id, authedUser, questions, users }) {
  const question = questions[id]
  const askedBy = users[question.author]

  const chosenOption = getChosenOption(authedUser, question)

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
      <Link to={'/questions/' + id}>
        <Button variant='primary'>
          {chosenOption === null ? 'Vote!' : 'View results'}
        </Button>
      </Link>
      <p className='asked-by'>Asked by: { askedBy.name }</p>
    </div>
  )
}

function mapStateToProps({ authedUserId, questions, users }) {
  return {
    authedUser: users[authedUserId] || null,
    questions,
    users,
  }
}

export default connect(mapStateToProps)(QuestionOverview);