import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core'
import { Home as HomeIcon } from '@material-ui/icons'
import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Quiz from './Quiz'

function HomeIconLink(props: any) {
  return (
    <Link to="/" {...props}>
      <HomeIcon />
    </Link>
  )
}

function App({ classes: { homeButton } }: WithStyles<'homeButton'>) {
  return (
    <Fragment>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={homeButton}
            color="inherit"
            aria-label="Home"
            component={HomeIconLink}
          />

          <Typography variant="headline" color="inherit">
            StackSelect
          </Typography>
        </Toolbar>
      </AppBar>

      <Route exact={true} path="/" component={Home} />
      <Route path="/:name" component={Quiz} />
    </Fragment>
  )
}

export default withStyles({
  homeButton: {
    marginLeft: -12,
    marginRight: 20
  }
})(App)
