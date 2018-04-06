import { List, ListItem, ListItemText, ListSubheader } from 'material-ui';
import React from 'react';
import { Link } from 'react-router-dom';
import quizzes from './quizzes';

export default () => (
  <List subheader={<ListSubheader>Quizzes</ListSubheader>}>
    {quizzes.map(({ description, name }) => (
      <ListItem key={name} button component={Link} to={name}>
        <ListItemText primary={name} secondary={description} />
      </ListItem>
    ))}
  </List>
);
