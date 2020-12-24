import React from 'react'
import { connect } from 'react-redux'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import QuestionsList from './QuestionsList'

class QuestionsContainer extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="unanswered">
        <Tab eventKey="unanswered" title="Unanswered Questions">
          <QuestionsList questions={ this.props.unansweredQuestions } />
        </Tab>
        <Tab eventKey="answered" title="Anwsered Questions">
        <QuestionsList questions={ this.props.answeredQuestions } />
        </Tab>
      </Tabs>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  const answeredQuestions = authedUser !== null ? Object.keys(authedUser.answers) : []

  return {
    authedUser,
    unansweredQuestions: Object.values(questions).filter(q => !answeredQuestions.includes(q.id)),
    answeredQuestions: Object.values(questions).filter(q => answeredQuestions.includes(q.id)),
  }
}

export default connect(mapStateToProps)(QuestionsContainer)