import { Transaction, User } from '../../types'

import { TransactionItem } from './TransactionItem'

type Props = {
  transactions: Transaction[]
  users: User[] | null
}

export const TransactionsList = ({ transactions, users }: Props) => {
  return (
    <>
      {transactions.map((transaction) => {
        const user = users?.find((user) => user?.id === transaction.userId)
        return (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            user={user as User}
          />
        )
      })}
    </>
  )
}
