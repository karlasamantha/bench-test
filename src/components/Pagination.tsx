import { isLastPage } from '../utils'
import styles from '../styles/Pagination.module.css'

function Pagination(
  { page,
    totalCount,
    transactionsPerPage,
    fetchTransactions
  }: { 
    page: number,
    totalCount: number,
    transactionsPerPage: number,
    fetchTransactions: (page: number) => void
  }) {
  return (
    <div className={styles.pagination}>
      {page !== 1 && (
          <button
          className={styles.button}
          onClick={() => fetchTransactions(page - 1)}
        >
          Previous
        </button>
      )}
      <span className={styles.current}>{page}</span>
      <button
        className={styles.button}
        disabled={isLastPage(page, transactionsPerPage, totalCount)}
        onClick={() => fetchTransactions(page + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination