import { List, ListItem, ListItemText, ListSubheader } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import getOptions from './getOptions'
import Options from './Options'
import quizzes from './quizzes.json'

export default function Home() {
  return (
    <List subheader={<ListSubheader>Quizzes</ListSubheader>}>
      {quizzes.map(({ description, name, questions }) => (
        <ListItem
          key={name}
          button
          component={(props: any) => <Link to={name} {...props} />}
        >
          <ListItemText
            primary={name}
            secondary={
              <>
                {description}
                <br />
                <Options labels={getOptions(questions)} />
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  )
}
