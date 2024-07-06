import React from 'react'
import { Avatar as MuiAvatar } from '@mui/material'

type Props = {
  children?: React.ReactNode
  alt?: string
  src?: string
  className?: string
}

export const Avatar = ({ children, alt, src, className }: Props) => (
  <MuiAvatar alt={alt} src={src} className={className}>
    {children}
  </MuiAvatar>
)
