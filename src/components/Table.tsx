import React from 'react'
import TableItem from './TableItem'
import { ITransactionsData } from '../types'

function Table({ totalCount, page, transactions }: ITransactionsData) {
  console.log(totalCount)
  console.log(page)
  return (
    <table>
      <tbody>
        {transactions.map((transaction, index) => (
          <TableItem 
            key={index}
            Date={transaction.Date}
            Company={transaction.Company}
            Ledger={transaction.Ledger}
            Amount={transaction.Amount}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table