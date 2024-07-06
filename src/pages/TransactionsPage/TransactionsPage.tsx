import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Transaction, User } from '../../types'

import { useQueryParam } from '../../hooks/useQueryParams'
import { useFetch } from '../../hooks/useFetch'
import {
  useFetchPagination,
  PaginationResult,
} from '../../hooks/useFetchPagination'
import { Select } from '../../components/core/Select'
import { Typography } from '../../components/core/Typography'
import { Loader } from '../../components/core/Loader'
import { Alert } from '../../components/core/Alert'
import { TransactionsList } from './TransactionList'
import { TRANSACTION_STATUS_OPTIONS } from './utils/constants'
import { API_URL } from '../../api/url'

const Container = styled.div`
  padding: 4px;
  max-width: 800px;
  margin: auto;
`

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px;
`

const StyledSelect = styled(Select)`
  && {
    margin: 20px 0;
  }
`

const StyledTitle = styled(Typography)`
  && {
    margin-top: 20px;
  }
`

const TransactionsPage = () => {
  const [status, setStatus] = useQueryParam('status')

  const filters = {
    ...(status && { status }),
  }

  const {
    items: transactions,
    hasMore,
    isLoading,
    error,
    loadMoreItems,
  }: PaginationResult<Transaction> = useFetchPagination({
    url: API_URL.TRANSACTIONS,
    filters,
  })

  const { data: users } = useFetch<User[]>(API_URL.USERS)

  return (
    <Container>
      <StyledTitle variant="h4">Transactions</StyledTitle>
      <StyledSelect
        id="status-filter-label"
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        options={TRANSACTION_STATUS_OPTIONS}
      />
      {error && <Alert severity="error">Error: {error}</Alert>}
      <InfiniteScroll
        dataLength={transactions.length}
        next={loadMoreItems}
        hasMore={hasMore}
        loader={<LoaderContainer>{isLoading && <Loader />}</LoaderContainer>}
      >
        <TransactionsList transactions={transactions} users={users} />
      </InfiniteScroll>
    </Container>
  )
}

export default TransactionsPage
