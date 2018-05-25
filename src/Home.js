import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography
} from '@material-ui/core'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Options from './Options'
import getOptions from './getOptions'
import quizzes from './quizzes'

export default function Home() {
  return (
    <List subheader={<ListSubheader>Quizzes</ListSubheader>}>
      {quizzes.map(({ description, name, questions }) => (
        <ListItem key={name} button component={Link} to={name}>
          <ListItemText
            primary={<Typography variant="subheading">{name}</Typography>}
            secondary={
              <Fragment>
                <Typography color="textSecondary">{description}</Typography>
                <Options options={getOptions(questions)} />
              </Fragment>
            }
            disableTypography
          />
        </ListItem>
      ))}
    </List>
  )
}
