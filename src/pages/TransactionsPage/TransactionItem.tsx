import { useState } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import currency from 'currency.js'
import { Transaction, User } from '../../types'

import { Typography } from '../../components/core/Typography'
import { Avatar } from '../../components/core/Avatar'
import { Card } from '../../components/core/Card'
import { TransactionSidebar } from './TransactionSidebar'
import { CURRENCIES } from './utils/constants'

const StyledCard = styled(Card)`
  && {
    margin-bottom: 16px;
    cursor: pointer;
  }
`

const MerchantInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const MerchantName = styled.div`
  margin-left: 8px;
`

type Props = {
  transaction: Transaction
  user: User
}

export const TransactionItem = ({ transaction, user }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const formattedDate = format(
    new Date(transaction.transactionTime),
    'dd.MM.yyyy'
  )
  const formattedValue = currency(transaction.amount, {
    symbol: CURRENCIES[transaction.currency],
  }).format()

  return (
    <>
      <StyledCard onClick={() => setIsOpen(true)}>
        <MerchantInfo>
          <Avatar
            alt={transaction.merchantName}
            src={transaction.merchantIconUrl}
          />
          <MerchantName>{transaction.merchantName}</MerchantName>
        </MerchantInfo>
        <Typography variant="body2" color="textSecondary">
          Status: {transaction.status}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Date: {formattedDate}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Value: {formattedValue}
        </Typography>
      </StyledCard>
      <TransactionSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        status={transaction.status}
        date={formattedDate}
        userName={user?.name ?? ''}
      />
    </>
  )
}
