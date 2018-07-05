import { Chip, Theme, withStyles, WithStyles } from '@material-ui/core'
import React from 'react'
import FlipMove from 'react-flip-move'

const styles = ({ spacing: { unit } }: Theme) => ({ chip: { margin: unit } })

interface Props extends WithStyles<typeof styles> {
  labels: string[]
}

export default withStyles(styles)(({ classes: { chip }, labels }: Props) => (
  <FlipMove typeName="span">
    {labels.map(label => (
      <Chip key={label} className={chip} label={label} component="span" />
    ))}
  </FlipMove>
))
