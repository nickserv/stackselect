import { Chip, Theme, withStyles, WithStyles } from '@material-ui/core'
import React from 'react'
import FlipMove from 'react-flip-move'

const styles = (theme: Theme) => ({ chip: { margin: theme.spacing.unit } })

interface Props extends WithStyles<typeof styles> {
  options: string[]
}

export default withStyles(styles)(({ classes: { chip }, options }: Props) => {
  return (
    <FlipMove typeName="span">
      {options.map(option => (
        <Chip key={option} className={chip} label={option} />
      ))}
    </FlipMove>
  )
})
