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
import quizzes from './quizzes'

const flatten = array => [].concat(...array)
const unique = array => Array.from(new Set(array))

const getOptions = questions =>
  unique(
    questions.reduce(
      (memo, { options }) => [...memo, ...flatten(Object.values(options))],
      []
    )
  )

export default () => (
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
