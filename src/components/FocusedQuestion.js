import React from 'react'
import { connect } from 'react-redux'

import { getChosenOption } from '../utils/helpers'

import AnswerQuestion from './AnswerQuestion'
import QuestionResults from './QuestionResults'

function FocusedQuestion({ authedUser, question }) {
  const chosen = question && getChosenOption(authedUser, question)

  return (
    <>
      {question === undefined
        ? <h2>404 question not found</h2>
        : chosen !== null
            ? <QuestionResults id={ question.id } />
            : <AnswerQuestion id={ question.id } />
      }
    </>
  )
}

function mapStateToProps({ authedUserId, users, questions }, { match: { params: { id } } }) {
  return {
    authedUser: users[authedUserId] || null,
    question: questions[id],
  }
}

export default connect(mapStateToProps)(FocusedQuestion)