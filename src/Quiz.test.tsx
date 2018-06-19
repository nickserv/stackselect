import React from 'react'
import { fireEvent, render } from 'react-testing-library'
import Quiz from './Quiz'
import quizzes from './quizzes.json'

test('Quiz', () => {
  const { name, questions } = quizzes[0]
  const { getByText } = render(
    <Quiz
      match={{
        isExact: true,
        params: { name },
        path: '/:name',
        url: '/JavaScript Frontend Framework'
      }}
    />
  )
  getByText(name)
  for (const { name } of questions) getByText(name)
  for (const { name } of questions[0].answers) getByText(name)

  // change questions
  fireEvent.click(getByText(questions[1].name))
  for (const { name } of questions[1].answers) getByText(name)
})
