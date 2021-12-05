import { isLastPage } from '../utils'
import styles from '../styles/Pagination.module.css'

function Pagination(
  { page,
    totalCount,
    fetchTransactions
  }: { 
    page: number,
    totalCount: number,
    fetchTransactions: (page: number) => void
  }) {
  return (
    <div className={styles.pagination}>
      {page !== 1 && (
          <button
          className={styles.button}
          onClick={() => fetchTransactions(page - 1)}
          data-testid='previous'
        >
          Previous
        </button>
      )}
      <span className={styles.current}>{page}</span>
      <button
        className={styles.button}
        disabled={isLastPage(page, totalCount)}
        onClick={() => fetchTransactions(page + 1)}
        data-testid='next'
      >
        Next
      </button>
    </div>
  )
}

export default Pagination