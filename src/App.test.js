import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from 'react-testing-library'
import App from './App'
import quizzes from './quizzes'

const description = quizzes[0].description

test('Home', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  getByText('StackSelect')
  getByText(description)
})

test('Quiz', () => {
  const { queryByText } = render(
    <MemoryRouter initialEntries={[description]}>
      <App />
    </MemoryRouter>
  )
  expect(queryByText(description)).toBeNull()
})
