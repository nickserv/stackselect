import 'jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render } from 'react-testing-library'
import Quiz from './Quiz'
import quizzes from './quizzes.json'

test('Quiz', () => {
  const { name, questions } = quizzes[0]
  const { container, getByText } = render(
    <Quiz
      match={{
        isExact: true,
        params: { name },
        path: '/:name',
        url: '/JavaScript Frontend Framework'
      }}
    />
  )
  expect(container).toHaveTextContent(name)
  for (const { name } of questions) expect(container).toHaveTextContent(name)
  for (const { name } of questions[0].answers)
    expect(container).toHaveTextContent(name)

  // change questions
  fireEvent.click(getByText(questions[1].name))
  for (const { name } of questions[1].answers)
    expect(container).toHaveTextContent(name)
})
