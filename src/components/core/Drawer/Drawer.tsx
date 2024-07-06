import React from 'react'
import styled from 'styled-components'
import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from '@mui/material'

type Props = {
  children: React.ReactNode
  onClose: () => void
  isOpen: boolean
  anchor?: MuiDrawerProps['anchor']
  className?: string
  width?: number
}

const StyledDrawer = styled(MuiDrawer)<{ width?: number }>`
  && {
    .MuiDrawer-paper {
      width: ${(props) => props.width}px;
    }
  }
`

export const Drawer = ({ onClose, className, children, isOpen, anchor = 'left', width = 300 }: Props) => (
  <StyledDrawer open={isOpen} anchor={anchor} onClose={onClose} className={className} width={width}>
    {children}
  </StyledDrawer>
)
