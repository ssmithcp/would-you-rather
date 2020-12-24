export function getChosenOption(user, question) {
  if (question.optionOne.votes.includes(user.id)) {
    return question.optionOne
  }

  if (question.optionTwo.votes.includes(user.id)) {
    return question.optionTwo
  }

  return null
}