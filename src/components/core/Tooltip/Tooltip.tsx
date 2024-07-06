import React from 'react'
import { Tooltip as MuiTooltip } from '@mui/material'

type Props = {
  title: string
  children: React.ReactElement
}

export const Tooltip = ({ title, children }: Props) => <MuiTooltip title={title}>{children}</MuiTooltip>
