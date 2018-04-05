import { List, ListItem, ListItemText, ListSubheader } from 'material-ui';
import React from 'react';
import { Link } from 'react-router-dom';
import quizzes from './quizzes';

export default () => (
  <List subheader={<ListSubheader>Quizzes</ListSubheader>}>
    <ListItem component={Link} to={quizzes[0].name}>
      <ListItemText
        primary={quizzes[0].name}
        secondary={quizzes[0].description}
      />
    </ListItem>
  </List>
);
