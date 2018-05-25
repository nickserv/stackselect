import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core'
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Quiz from './Quiz'

export default function App() {
  return (
    <Fragment>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            StackSelect
          </Typography>
        </Toolbar>
      </AppBar>

      <Route exact path="/" component={Home} />
      <Route path="/:name" component={Quiz} />
    </Fragment>
  )
}
