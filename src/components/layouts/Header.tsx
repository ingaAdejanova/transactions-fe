import React from 'react'
import styled from 'styled-components'
import { AppBar as MuiAppBar, Toolbar, IconButton, Container } from '@mui/material'

import { Typography } from '../core/Typography'
import { Menu } from '../core/Menu'
import { Avatar } from '../core/Avatar'
import { Tooltip } from '../core/Tooltip'

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`

const Box = styled.div`
  display: flex;
  align-items: center;
`

type Props = {
  leftHeaderText: string
  rightHeaderText: string
  userProfileImage?: string
  settings: { title: string; action: () => void }[]
  className?: string
}

export const Header: React.FC<Props> = ({ leftHeaderText, rightHeaderText, userProfileImage, settings, className }) => {
  const [userMenuAnchorEl, setUserMenuAnchorEl] = React.useState<HTMLElement | null>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchorEl(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setUserMenuAnchorEl(null)
  }

  return (
    <MuiAppBar className={className} position="static">
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <Typography variant="h6" noWrap component="div">
            {leftHeaderText}
          </Typography>
          <Box>
            <Typography variant="body1" noWrap component="div">
              {rightHeaderText}
            </Typography>
            {userProfileImage && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar alt={rightHeaderText} src={userProfileImage} />
                </IconButton>
              </Tooltip>
            )}
            <Menu anchorEl={userMenuAnchorEl} settings={settings} handleClose={handleCloseUserMenu} />
          </Box>
        </StyledToolbar>
      </Container>
    </MuiAppBar>
  )
}
