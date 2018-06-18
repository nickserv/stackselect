import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from 'react-testing-library'
import getOptions from './getOptions'
import Home from './Home'
import quizzes from './quizzes.json'

test('Home', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  const quiz = quizzes[0]
  getByText(quiz.name)
  getByText(quiz.description)
  for (const option of getOptions(quiz.questions)) getByText(option)
})
