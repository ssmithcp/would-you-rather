import React from 'react'

import Question from './Question'

function QuestionsList({ questions }) {
  return (
    <>
      {questions.map(q => (
          <Question key={ q.id } id={ q.id } />
      ))}
    </>
  )
}

export default QuestionsList