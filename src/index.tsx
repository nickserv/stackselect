import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import 'typeface-roboto'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={createMuiTheme()}>
      <App />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById('root')
)
registerServiceWorker()
module.hot && module.hot.accept()
