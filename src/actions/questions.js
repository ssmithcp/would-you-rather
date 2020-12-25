import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const NEW_QUESTION = 'NEW_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function answerQuestion(qid, uid, selection) {
  return dispatch => {
    saveQuestionAnswer({
      authedUser: uid,
      qid,
      answer: selection
    }).then(() =>
      dispatch({
        type: ANSWER_QUESTION,
        qid,
        uid,
        selection,
      }
    ))
  }
}

export function newQuestion(uid, optionOne, optionTwo) {
  return dispatch => {
    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: uid
    }).then(newQuestion =>
      dispatch({
        type: NEW_QUESTION,
        uid,
        qid: newQuestion.id,
        optionOne,
        optionTwo,
      })
    )
  }
}