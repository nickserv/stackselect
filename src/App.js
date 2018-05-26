import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core'
import { Home as HomeIcon } from '@material-ui/icons'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Quiz from './Quiz'

function App({ classes: { homeButton } }) {
  return (
    <Fragment>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={homeButton}
            color="inherit"
            aria-label="Home"
            component={Link}
            to="/"
          >
            <HomeIcon />
          </IconButton>

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

App.propTypes = {
  classes: PropTypes.shape({
    homeButton: PropTypes.string.isRequired
  }).isRequired
}

export default withStyles({
  homeButton: {
    marginLeft: -12,
    marginRight: 20
  }
})(App)
