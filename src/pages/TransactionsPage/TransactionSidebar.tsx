import styled from 'styled-components'

import { Drawer } from '../../components/core/Drawer'
import { Typography } from '../../components/core/Typography'
import theme from '../../theme'

const ContentWrapper = styled.div`
  padding: 20px;
`

const Divider = styled.div`
  height: 1px;
  background-color: ${theme.colors.gray};
  margin: 10px 0;
`

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  status: string
  date: string
  userName: string
}

export const TransactionSidebar = ({
  isOpen,
  setIsOpen,
  status,
  date,
  userName,
}: Props) => {
  return (
    <Drawer isOpen={isOpen} anchor="right" onClose={() => setIsOpen(false)}>
      <ContentWrapper>
        <Typography variant="h6">Transaction Details</Typography>
        <Divider />
        <Typography variant="body2" color="textSecondary">
          Status: {status}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Date: {date}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          User: {userName}
        </Typography>
      </ContentWrapper>
    </Drawer>
  )
}
