import React from 'react'

function QuestionsList({ questions }) {
  return (
    <ol>
      {questions.map(q => (
        <li key={ q.id }>
          { q.id }
        </li>
      ))}
    </ol>
  )
}

export default QuestionsList