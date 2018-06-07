import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import 'typeface-roboto'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)
registerServiceWorker()
