import React from 'react'
import TableItem from './TableItem'
import { ITransactionItem, TableHeaderItemsEnum } from '../types'
import styles from '../styles/Table.module.css'

function Table({ transactions, totalAmount }: {transactions: ITransactionItem[], totalAmount: number}) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.thead}>
          {Object.keys(TableHeaderItemsEnum).map((item, index) => 
            <th className={styles.item}  key={index}>{item}</th>
          )}
          <th className={styles.item}>{totalAmount}</th>
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