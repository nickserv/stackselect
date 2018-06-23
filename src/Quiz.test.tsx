import 'jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render } from 'react-testing-library'
import Quiz from './Quiz'
import quizzes from './quizzes.json'

beforeEach(() => (console.error = jest.fn()))
afterEach(jest.restoreAllMocks)

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

  // select an option
  const option = container.querySelector('input[value=MVC]') as HTMLInputElement
  expect(option).toHaveProperty('checked', false)
  fireEvent.click(option)
  expect(option).toHaveProperty('checked', true)

  // change questions
  fireEvent.click(getByText(questions[1].name))
  for (const { name } of questions[1].answers)
    expect(container).toHaveTextContent(name)
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
