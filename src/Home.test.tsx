import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from 'react-testing-library'
import getOptions from './getOptions'
import Home from './Home'
import quizzes from './quizzes'

test('Home', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  const quiz = quizzes[0]
  getByText(quiz.name)
  getByText(quiz.description)
  getOptions(quiz.questions).forEach(option => getByText(option))
})
