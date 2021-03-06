import React from 'react'
import { connect } from 'react-redux'

import { answerQuestion } from '../actions/questions'

import Button from 'react-bootstrap/Button';

import AskedBy from './AskedBy'
import './AnswerQuestion.scss'

class AnswerQuestion extends React.Component {
  state = {
    selectedOption: null,
  }
  selectedChanged(e) {
    this.setState({
      selectedOption: e.target.value,
    })
  }
  render() {
    const { authedUser, question, askedBy, dispatch } = this.props

    return (
      <form className='answer-question-form'>
        <AskedBy userId={ askedBy } />
        <h3>Would you rather ...</h3>
        <p>
          <input
            id='option-one'
            type='radio'
            value={ 'optionOne' }
            onChange={ e => this.selectedChanged(e) }
            name='answer'
          />
          <label htmlFor='option-one'>{ question.optionOne.text }</label>
        </p>
        <p>OR</p>
        <p>
         <input
            id='option-two'
            type='radio'
            value={ 'optionTwo' }
            onChange={ e => this.selectedChanged(e) }
            name='answer'
          />
          <label htmlFor='option-two'>{ question.optionTwo.text }</label>
        </p>
        <Button
          variant="outline-dark"
          disabled={ this.state.selectedOption === null }
          onClick={ () => dispatch(answerQuestion(
            question.id,
            authedUser.id,
            this.state.selectedOption
          )) }
        >
          Submit
        </Button>
      </form>
    )
  }
}

function mapStateToProps({ authedUserId, questions, users }, { id }) {
  return {
    authedUser: users[authedUserId] || null,
    question: questions[id],
    askedBy: questions[id].author,
  }
}

export default connect(mapStateToProps)(AnswerQuestion)