import React from 'react'
import { cleanup, fireEvent, renderIntoDocument } from 'react-testing-library'
import Quiz from './Quiz'
import quizzes from './quizzes'

afterEach(cleanup)

test('Quiz', () => {
  const quiz = quizzes[0]
  const { getByText } = renderIntoDocument(
    <Quiz match={{ params: { name: quiz.name } }} />
  )
  getByText(quiz.name)
  for (const { name } of quiz.questions) getByText(name)
  quiz.questions[0].answers.forEach(({ name }) => getByText(name))

  // change questions
  fireEvent.click(getByText(quiz.questions[1].name))
  quiz.questions[1].answers.forEach(({ name }) => getByText(name))
})
