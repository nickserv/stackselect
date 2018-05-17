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
import quizzes, { IQuestion } from './quizzes'

const flatten = <T extends any>(array: T[][]): T[] =>
  ([] as T[]).concat(...array)

const unique = <T extends any>(array: T[]): T[] => Array.from(new Set(array))

const getOptions = (questions: IQuestion[]): string[] =>
  unique(
    flatten(questions.map(({ options }) => flatten(Object.values(options))))
  ).sort()

export default () => (
  <List subheader={<ListSubheader>Quizzes</ListSubheader>}>
    {quizzes.map(({ description, name, questions }) => (
      <ListItem key={name} button={true} component={Link} {...{ to: name }}>
        <ListItemText
          primary={<Typography variant="subheading">{name}</Typography>}
          secondary={
            <Fragment>
              <Typography color="textSecondary">{description}</Typography>
              <Options options={getOptions(questions)} />
            </Fragment>
          }
          disableTypography={true}
        />
      </ListItem>
    ))}
  </List>
)