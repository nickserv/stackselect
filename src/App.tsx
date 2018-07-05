import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import { IconButtonProps } from '@material-ui/core/IconButton'
import { Home as HomeIcon } from '@material-ui/icons'
import React, { ComponentClass } from 'react'
import styled from 'react-emotion'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Quiz from './Quiz'

const StyledIconButton = styled(IconButton as ComponentClass<IconButtonProps>)`
  margin-left: -12px;
  margin-right: 20px;
`

export default function App() {
  return (
    <>
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <StyledIconButton
            color="inherit"
            aria-label="Home"
            component={(props: any) => (
              <Link to="/" {...props}>
                <HomeIcon />
              </Link>
            )}
          />

          <Typography variant="headline" color="inherit">
            StackSelect
          </Typography>
        </Toolbar>
      </AppBar>

      <Route exact path="/" component={Home} />
      <Route path="/:name" component={Quiz} />
    </>
  )
}
