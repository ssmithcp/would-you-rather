import React from 'react'
import { connect } from 'react-redux'

class QuestionsList extends React.Component {
  render() {
    console.log(this.props)
    return <></>
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    unansweredQuestions: questions
  }
}

export default connect(mapStateToProps)(QuestionsList)