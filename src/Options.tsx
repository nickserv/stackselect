import { Chip, Theme, withStyles, WithStyles } from '@material-ui/core'
import React from 'react'
import FlipMove from 'react-flip-move'

const styles = ({ spacing: { unit } }: Theme) => ({ chip: { margin: unit } })

interface Props extends WithStyles<typeof styles>, FlipMove.FlipMoveProps {
  options: string[]
}

export default withStyles(styles)(
  ({ classes: { chip }, options, ...other }: Props) => (
    <FlipMove typeName="span" {...other}>
      {options.map(option => (
        <Chip key={option} className={chip} label={option} component="span" />
      ))}
    </FlipMove>
  )
)
