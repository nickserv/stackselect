import { Chip } from '@material-ui/core'
import { ChipProps } from '@material-ui/core/Chip'
import React, { ComponentClass } from 'react'
import styled from 'react-emotion'
import FlipMove from 'react-flip-move'

const StyledChip = styled(Chip as ComponentClass<ChipProps>)`
  margin: ${props => props.theme.spacing.unit}px;
`

export default function Options({ labels }: { labels: string[] }) {
  return (
    <FlipMove typeName="span">
      {labels.map(label => (
        <StyledChip key={label} label={label} component="span" />
      ))}
    </FlipMove>
  )
}
