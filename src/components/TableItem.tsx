import React from 'react'
import { ITransactionItem } from '../types/index'

function TableItem({ Date, Company, Ledger, Amount }: ITransactionItem, key: number) {
  return (
    <tr key={key}>
      <td>{Date}</td>
      <td>{Company}</td>
      <td>{Ledger}</td>
      <td>${Amount}</td>
    </tr>
  )
}

export default TableItem
