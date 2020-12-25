import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AskedBy from './AskedBy'

import { getChosenOption } from '../utils/helpers'

import { FaCheck } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import './QuestionOverview.scss'

function QuestionOverview({ id, authedUser, questions, users }) {
  const question = questions[id]
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
      <AskedBy userId={ question.author } />
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