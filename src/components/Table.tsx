import React from 'react'
import TableItem from './TableItem'
import { ITransactionItem, TableHeaderItemsEnum } from '../types'
import { calculateTotalAmount } from '../utils'
import styles from '../styles/Table.module.css'

function Table({ transactions }: {transactions: ITransactionItem[]}) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.thead}>
          {Object.keys(TableHeaderItemsEnum).map((item, index) => 
            <th key={index}>{item}</th>
          )}
          <th>{calculateTotalAmount(transactions)}</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <TableItem
            key={index}
            index={index}
            transaction={transaction}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table