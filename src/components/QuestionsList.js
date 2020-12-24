import React from 'react'

import QuestionOverview from './QuestionOverview'

function QuestionsList({ questions }) {
  return (
    <>
      {questions.map(q => (
          <QuestionOverview key={ q.id } id={ q.id } />
      ))}
    </>
  )
}

export default QuestionsList