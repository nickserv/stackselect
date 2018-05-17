import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core'
import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Quiz from './Quiz'

export default function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <CssBaseline />

        <AppBar position="static">
          <Toolbar>
            <Typography variant="headline" color="inherit">
              StackSelect
            </Typography>
          </Toolbar>
        </AppBar>

        <Route exact={true} path="/" component={Home} />
        <Route path="/:name" component={Quiz} />
      </Fragment>
    </BrowserRouter>
  )
}
