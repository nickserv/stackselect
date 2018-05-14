import { Chip, withStyles } from '@material-ui/core'
import React from 'react'

const Options = ({ classes: { chip }, options }) =>
  options.map(option => <Chip key={option} className={chip} label={option} />)

export default withStyles(theme => ({
  chip: { margin: theme.spacing.unit }
}))(Options)
