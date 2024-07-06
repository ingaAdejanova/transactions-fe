import React from 'react'
import { Card as MuiCard, CardContent } from '@mui/material'

type Props = {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

export const Card = ({ onClick, children, className }: Props) => (
  <MuiCard className={className} onClick={onClick}>
    <CardContent>{children}</CardContent>
  </MuiCard>
)
