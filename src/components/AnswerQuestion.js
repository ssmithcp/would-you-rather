import React from 'react'
import { connect } from 'react-redux'

import { answerQuestion } from '../actions/questions'

import Button from 'react-bootstrap/Button';
import './AnswerQuestion.scss'

class AnswerQuestion extends React.Component {
  state = {
    selectedAnswer: null,
  }
  selectedChanged(e) {
    this.setState({
      selectedAnswer: e.target.value,
    })
  }
  render() {
    const { authedUser, question, askedBy, dispatch } = this.props
    return (
      <form className='answer-question-form'>
        <p>Asked by: { askedBy }</p>
        <h3>Would you rather ...</h3>
        <p>
          <input
            type='radio'
            value={ 'optionOne' }
            onChange={ e => this.selectedChanged(e) }
            name='answer'
          />
          { question.optionOne.text }
        </p>
        <p>OR</p>
        <p>
         <input
            type='radio'
            value={ 'optionTwo' }
            onChange={ e => this.selectedChanged(e) }
            name='answer'
          />
          { question.optionTwo.text }
        </p>
        <Button
          variant="outline-dark"
          disabled={ this.state.selectedAnswer === null }
          onClick={ () => dispatch(answerQuestion(
            question.id,
            authedUser.id,
            this.state.selectedAnswer
          )) }
        >
          Submit
        </Button>
      </form>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  return {
    authedUser,
    question: questions[id],
    askedBy: users[questions[id].author].name,
  }
}

export default connect(mapStateToProps)(AnswerQuestion)