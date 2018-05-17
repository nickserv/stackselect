import { Chip, withStyles } from '@material-ui/core'
import React, { Fragment } from 'react'

const decorate = withStyles(theme => ({
  chip: { margin: theme.spacing.unit }
}))

interface IProps {
  options: string[]
}

export default decorate<IProps>(function Options({ classes, options }) {
  return (
    <Fragment>
      {options.map(option => (
        <Chip key={option} className={classes.chip} label={option} />
      ))}
    </Fragment>
  )
})
