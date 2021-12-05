import { ITransactionItem } from '../types/index'
import { formatCurrency, formatDateString} from '../utils'
import styles from '../styles/Table.module.css'

function TableItem({ transaction, index }: {transaction: ITransactionItem, index: number}) {
  const { Date, Company, Ledger, Amount } = transaction

  function getClassName(index: number) {
    if (index % 2 !== 0) {
      return styles.oddElement
    }
    return styles.item
  }

  return (
    <tr key={index} className={styles.row}>
      <td className={getClassName(index)}>{formatDateString(Date)}</td>
      <td className={getClassName(index)}>{Company}</td>
      <td className={getClassName(index)}>{Ledger}</td>
      <td className={getClassName(index)}>{formatCurrency(Amount)}</td>
    </tr>
  )
}

export default TableItem
