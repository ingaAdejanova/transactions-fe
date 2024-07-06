import { Menu as MuiMenu, MenuItem, PopoverOrigin } from '@mui/material'
import styled from 'styled-components'

import { Typography } from '../Typography'

type MenuItem = {
  title: string
  action: () => void
}

type Props = {
  anchorEl: HTMLElement | null
  settings: MenuItem[]
  handleClose: () => void
  anchorOrigin?: PopoverOrigin
  transformOrigin?: PopoverOrigin
}

const StyledMenuItemText = styled(Typography)`
  text-align: center;
`

export const Menu = ({
  anchorEl,
  settings,
  handleClose,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
  transformOrigin = { vertical: 'top', horizontal: 'right' },
}: Props) => {
  return (
    <MuiMenu
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      keepMounted
      transformOrigin={transformOrigin}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {settings?.map((setting) => (
        <MenuItem key={setting.title} onClick={setting.action}>
          <StyledMenuItemText>{setting.title}</StyledMenuItemText>
        </MenuItem>
      ))}
    </MuiMenu>
  )
}
