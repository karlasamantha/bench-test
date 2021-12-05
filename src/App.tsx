import { useEffect, useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import Pagination from './components/Pagination'
import Loading from './components/Loading'
import { fetchData } from './api/client'
import { ITransactionItem } from './types'

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [transactions, setTransactions] = useState<ITransactionItem[]>()
  const [page, setPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number>(0)

  const fetchTransactions = async (page: number) => {
    setIsLoading(true)
    try {
      const data = await fetchData(page)
      const { transactions, totalCount } = data
      setTransactions(transactions)
      setPage(page)
      setTotalCount(totalCount)
      setIsLoading(false)
    } catch(err) {
      throw Error(`Sorry, there was an issue fetching more transactions. Error: ${err}`)
    }
  }

  useEffect(() => {
    fetchTransactions(page)
  }, [page])

  return (
    <>
      <Header title='Bench Test'/>
      {transactions && !isLoading ? (
        <>
        <Table transactions={transactions} />
        <Pagination
          page={page}
          totalCount={totalCount}
          transactionsPerPage={transactions?.length}
          fetchTransactions={fetchTransactions}
        />
        </>
      ) : <Loading />}
    </>
  )
}

export default App
