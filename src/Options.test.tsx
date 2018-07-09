import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider } from 'emotion-theming'
import 'jest-dom/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'
import Options from './Options'

test('Options', () => {
  const labels = ['One', 'Two', 'Three']
  const { container } = render(
    <ThemeProvider theme={createMuiTheme}>
      <Options labels={labels} />
    </ThemeProvider>
  )
  for (const label of labels) expect(container).toHaveTextContent(label)
})
