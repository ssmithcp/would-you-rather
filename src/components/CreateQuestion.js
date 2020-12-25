import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { newQuestion } from '../actions/questions'

import Button from 'react-bootstrap/Button';

import './CreateQuestion.scss'

function CreateQuestion({ authedUser, dispatch }) {
  const [optionOne, setOptionOne] = useState('')
  const [optionTwo, setOptionTwo] = useState('')

  const history = useHistory();

  const goHome = () => history.push('/')

  return (
    <form className='create-question'>
      <h3>Create a question:</h3>
      <h4>Would you rather...</h4>
      <input
        type='text'
        placeholder='First option'
        onChange={ e => setOptionOne(e.target.value) }
      />
      <p>OR</p>
      <input
        type='text'
        placeholder='Second option'
        onChange={ e => setOptionTwo(e.target.value) }
      />
      <Button
        variant="outline-dark"
        disabled={ optionOne.length === 0 || optionTwo.length === 0 }
        onClick={ () =>
          dispatch(newQuestion(authedUser.id, optionOne, optionTwo))
            .then(goHome)
        }
      >
        Add Question!
      </Button>
    </form>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(CreateQuestion)