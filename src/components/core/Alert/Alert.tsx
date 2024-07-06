import React from 'react'
import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@mui/material'

type Props = {
  children: React.ReactNode
  severity: MuiAlertProps['severity']
}

export const Alert = ({ children, severity }: Props) => (
  <MuiAlert severity={severity}>{children}</MuiAlert>
)
