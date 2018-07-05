import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from 'emotion-theming'
import 'jest-dom/extend-expect'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from 'react-testing-library'
import getOptions from './getOptions'
import Home from './Home'
import quizzes from './quizzes.json'

test('Home', () => {
  const { container } = render(
    <MemoryRouter>
      <ThemeProvider theme={createMuiTheme()}>
        <Home />
      </ThemeProvider>
    </MemoryRouter>
  )
  const quiz = quizzes[0]
  expect(container).toHaveTextContent(quiz.name)
  expect(container).toHaveTextContent(quiz.description)
  for (const option of getOptions(quiz.questions))
    expect(container).toHaveTextContent(option)
})
