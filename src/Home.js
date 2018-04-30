import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography
} from 'material-ui'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Options from './Options'
import quizzes from './quizzes'

export default () => (
  <List subheader={<ListSubheader>Quizzes</ListSubheader>}>
    {quizzes.map(({ description, name, questions }) => (
      <ListItem key={name} button component={Link} to={name}>
        <ListItemText
          primary={<Typography variant="subheading">{name}</Typography>}
          secondary={
            <Fragment>
              <Typography color="textSecondary">{description}</Typography>
              <Options questions={questions} />
            </Fragment>
          }
          disableTypography
        />
      </ListItem>
    ))}
  </List>
)
