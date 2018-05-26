import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import {
  cleanup,
  fireEvent,
  render,
  renderIntoDocument
} from 'react-testing-library'
import App from './App'
import quizzes from './quizzes'

const description = quizzes[0].description

afterEach(cleanup)

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
  const { getByLabelText, getByText, queryByText } = renderIntoDocument(
    <MemoryRouter initialEntries={[description]}>
      <App />
    </MemoryRouter>
  )
  expect(queryByText(description)).toBeNull()
  fireEvent.click(getByLabelText('Home'))
  getByText(description)
})
