import { Chip, withStyles } from 'material-ui';
import React from 'react';

const flatten = array => [].concat(...array);
const unique = array => Array.from(new Set(array));

const Options = ({ classes: { chip }, questions }) => {
  return unique(
    flatten(questions.map(({ options }) => flatten(Object.values(options))))
  )
    .sort()
    .map(option => <Chip key={option} className={chip} label={option} />);
};

export default withStyles(theme => ({
  chip: { margin: theme.spacing.unit }
}))(Options);
