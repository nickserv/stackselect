import { Chip, Theme, withStyles, WithStyles } from '@material-ui/core'
import React, { Fragment } from 'react'

const styles = (theme: Theme) => ({ chip: { margin: theme.spacing.unit } })

interface Props extends WithStyles<typeof styles> {
  options: string[]
}

export default withStyles(styles)(({ classes: { chip }, options }: Props) => {
  return (
    <Fragment>
      {options.map(option => (
        <Chip key={option} className={chip} label={option} />
      ))}
    </Fragment>
  )
})
