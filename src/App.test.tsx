import 'jest-dom/extend-expect'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { fireEvent, render } from 'react-testing-library'
import App from './App'
import quizzes from './quizzes.json'

const description = quizzes[0].description

test('Home', () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  expect(container).toHaveTextContent('StackSelect')
  expect(container).toHaveTextContent(description)
})

test('Quiz', () => {
  const { container, getByLabelText } = render(
    <MemoryRouter initialEntries={[description]}>
      <App />
    </MemoryRouter>
  )
  expect(container).not.toHaveTextContent(description)
  fireEvent.click(getByLabelText('Home'))
  expect(container).toHaveTextContent(description)
})
