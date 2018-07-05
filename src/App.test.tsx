import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from 'emotion-theming'
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
      <ThemeProvider theme={createMuiTheme()}>
        <App />
      </ThemeProvider>
    </MemoryRouter>
  )
  expect(container).toHaveTextContent('StackSelect')
  expect(container).toHaveTextContent(description)
})

test('Quiz', () => {
  const { container, getByLabelText } = render(
    <MemoryRouter initialEntries={[description]}>
      <ThemeProvider theme={createMuiTheme()}>
        <App />
      </ThemeProvider>
    </MemoryRouter>
  )
  expect(container).not.toHaveTextContent(description)
  fireEvent.click(getByLabelText('Home'))
  expect(container).toHaveTextContent(description)
})
