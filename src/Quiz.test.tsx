import 'jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render } from 'react-testing-library'
import Quiz from './Quiz'
import quizzes from './quizzes.json'

beforeEach(() => (console.error = jest.fn()))
afterEach(jest.restoreAllMocks)

test('Quiz', () => {
  const quiz = quizzes[0]
  const { container, getByText } = render(
    <Quiz
      match={{
        isExact: true,
        params: { name: quiz.name },
        path: '/:name',
        url: '/JavaScript Frontend Framework'
      }}
    />
  )
  expect(container).toHaveTextContent(quiz.name)
  for (const question of quiz.questions)
    expect(container).toHaveTextContent(question.name)
  for (const answer of quiz.questions[0].answers)
    expect(container).toHaveTextContent(answer.name)

  // select an option
  const option = container.querySelector<HTMLElement>('input[value=MVC]')!
  expect(option).toHaveProperty('checked', false)
  fireEvent.click(option)
  expect(option).toHaveProperty('checked', true)

  // change questions
  fireEvent.click(getByText(quiz.questions[1].name))
  for (const answer of quiz.questions[1].answers)
    expect(container).toHaveTextContent(answer.name)
})

test('invalid Quiz', () => {
  expect(() =>
    render(
      <Quiz
        match={{
          isExact: true,
          params: { name: 'Invalid' },
          path: '/:name',
          url: '/Invalid'
        }}
      />
    )
  ).toThrow('Quiz not found: Invalid')
})
