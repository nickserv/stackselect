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
  Object.keys(quiz.questions[0].options).forEach(getByText)

  // change questions
  fireEvent.click(getByText(quiz.questions[1].name))
  Object.keys(quiz.questions[1].options).forEach(getByText)
})
